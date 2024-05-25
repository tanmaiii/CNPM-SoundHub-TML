import SongItem from "@/components/SongItem";
import IMAGES from "@/constants/images";
import { COLORS, FONTFAMILY, FONTSIZE, HEIGHT, SPACING } from "@/theme/theme";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpFromBracket,
  faChevronLeft,
  faEllipsis,
  faGlobe,
  faHeart as faHeartSolid,
  faLock,
  faPlay,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation, useRoute } from "@react-navigation/native";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import {
  Animated,
  Platform,
  Pressable,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { AddSongFromPlaylist, ModalPlaylist, EditPlaylist } from "@/components/ItemModal";
import { playlistApi, songApi } from "@/apis";
import ArtistItem from "@/components/ArtistItem";
import CategoryHeader from "@/components/CategoryHeader";
import PlaylistCard from "@/components/PlaylistCard";
import apiConfig from "@/configs/axios/apiConfig";
import { useAuth } from "@/context/AuthContext";
import { NavigationProp, RootRouteProps } from "@/navigators/TStack";
import { WINDOW_WIDTH } from "@/utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FlatList, RefreshControl } from "react-native-gesture-handler";
import PlaylistDetailSkeleton from "./PlaylistDetailSkeleton";
import styles from "./style";
const statusBarHeight = Constants.statusBarHeight;

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

interface PlaylistDetailProps {}

const PlaylistDetail = (props: PlaylistDetailProps) => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RootRouteProps<"Playlist">>();
  const flatListRef = React.useRef<FlatList>();
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  const [isOpenModalAddSong, setIsOpenModalAddSong] = React.useState<boolean>(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = React.useState<boolean>(false);
  const [heightModal, setHeightModal] = React.useState<number>(400);
  const [totalCount, setTotalCount] = React.useState<number>(0);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  const playlistId = route.params.playlistId;
  const { token, currentUser } = useAuth();
  const queryClient = useQueryClient();

  const headerAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 400],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [20, 0],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  const backgroundColorAnimation = {
    backgroundColor: animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: ["transparent", COLORS.Black2],
      extrapolate: "clamp",
    }),
  };

  const imageAnimation = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 400],
          outputRange: [1, 0],
          extrapolate: "clamp",
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 200],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
  };

  const heightAnimation = {
    height: animatedValue.interpolate({
      inputRange: [0, 200],
      outputRange: [400, 0],
      extrapolate: "clamp",
    }),
    opacity: animatedValue.interpolate({
      inputRange: [0, 200],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
  };

  const { data: isLike } = useQuery({
    queryKey: ["like-playlist", playlistId],
    queryFn: async () => {
      const res = await playlistApi.checkLikedPlaylist(playlistId, token);
      return res.isLiked;
    },
  });

  const mutationLike = useMutation({
    mutationFn: (like: boolean) => {
      if (like) return playlistApi.unLikePlaylist(playlistId, token);
      return playlistApi.likePlaylist(playlistId, token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["like-playlist", playlistId] });
      queryClient.invalidateQueries({ queryKey: ["all-favorites"] });
      queryClient.invalidateQueries({ queryKey: ["playlists-favorites"] });
    },
  });

  const {
    data: playlist,
    isLoading: loadingPlaylist,
    refetch: refetchPlaylist,
    error: errorPlaylist,
  } = useQuery({
    queryKey: ["playlist", playlistId],
    queryFn: async () => {
      try {
        const res = await playlistApi.getDetail(playlistId, token);
        return res;
      } catch (error) {
        navigation.goBack();
        return null;
      }
    },
  });

  const {
    data: songs,
    refetch: refetchSongs,
    isLoading: loadingSongs,
  } = useQuery({
    queryKey: ["playlist-songs", playlistId],
    queryFn: async () => {
      const res = await songApi.getAllByPlaylistId(token, playlistId, 1, 50);
      setTotalCount(res.pagination.totalCount);
      return res.data;
    },
  });

  const {
    data: playlists,
    refetch: refetchPlaylists,
    isLoading: loadingPlaylists,
  } = useQuery({
    queryKey: ["playlists"],
    queryFn: async () => {
      const res = await playlistApi.getAll(1, 7);
      const filteredPlaylists = res.data?.filter((playlist) => playlist.id !== playlistId) || [];
      return filteredPlaylists.slice(0, 6);
    },
  });

  const handleRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => {
      refetchSongs();
      refetchPlaylists();
      refetchPlaylist();
      setRefreshing(false);
    }, 2000);
  };

  React.useEffect(() => {
    flatListRef.current && flatListRef.current.scrollToOffset({ animated: false, offset: 0 });
  }, [playlistId]);

  return (
    <View style={styles.container}>
      <View>
        <AnimatedLinearGradient
          colors={[COLORS.Primary, "transparent"]}
          style={[{ position: "absolute", left: 0, right: 0, top: 0 }, heightAnimation]}
        ></AnimatedLinearGradient>

        <StatusBar barStyle="light-content" backgroundColor={COLORS.Black2} />

        <SafeAreaView style={{ zIndex: 999 }}>
          <Animated.View
            style={[
              styles.header,
              backgroundColorAnimation,
              Platform.OS === "ios" && { paddingTop: statusBarHeight + SPACING.space_8 },
            ]}
          >
            <TouchableOpacity style={styles.buttonHeader} onPress={() => navigation.goBack()}>
              <FontAwesomeIcon icon={faChevronLeft} size={20} style={{ color: COLORS.White1 }} />
            </TouchableOpacity>
            <Animated.Text numberOfLines={1} style={[styles.titleHeader, headerAnimation]}>
              {playlist?.title || ""}
            </Animated.Text>
            <TouchableOpacity
              style={[styles.buttonHeader]}
              onPress={() => playlist && setIsOpenModal(!isOpenModal)}
            >
              <FontAwesomeIcon icon={faEllipsis} size={24} style={{ color: COLORS.White1 }} />
            </TouchableOpacity>
          </Animated.View>
        </SafeAreaView>

        <View style={styles.wrapper}>
          {loadingPlaylist || loadingPlaylists || loadingSongs ? (
            <PlaylistDetailSkeleton />
          ) : (
            <FlatList
              ref={flatListRef}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={handleRefresh}
                  tintColor={COLORS.White1}
                />
              }
              onScroll={(e) => {
                const offsetY = e.nativeEvent.contentOffset.y;
                animatedValue.setValue(offsetY);
              }}
              scrollEventThrottle={16}
              ListHeaderComponent={
                <View style={[styles.wrapperHeader]}>
                  <Animated.View style={[styles.wrapperImage, imageAnimation]}>
                    <Animated.Image
                      style={[styles.image]}
                      source={
                        !playlist?.image_path
                          ? IMAGES.PLAYLIST
                          : { uri: apiConfig.imageURL(playlist.image_path) }
                      }
                    />
                  </Animated.View>
                  <Text
                    numberOfLines={2}
                    style={[styles.textMain, { fontSize: FONTSIZE.size_24, maxWidth: "80%" }]}
                  >
                    {playlist?.title || "Unknown"}
                  </Text>

                  <Pressable
                    onPress={() => navigation.navigate("Artist", { userId: playlist.user_id })}
                  >
                    <Text numberOfLines={1} style={[styles.textMain, { color: COLORS.Primary }]}>
                      {playlist?.author || "Unknown"}
                    </Text>
                  </Pressable>

                  <View
                    style={{ flexDirection: "row", gap: SPACING.space_4, alignItems: "center" }}
                  >
                    {playlist?.public === 0 ? (
                      <FontAwesomeIcon icon={faLock} color={COLORS.White2} size={12} />
                    ) : (
                      <FontAwesomeIcon icon={faGlobe} color={COLORS.White2} size={12} />
                    )}

                    <Text style={styles.textExtra}>{totalCount} Songs</Text>
                  </View>

                  <View style={styles.groupButton}>
                    <TouchableOpacity style={styles.buttonExtra}>
                      <FontAwesomeIcon
                        icon={faArrowUpFromBracket}
                        size={18}
                        style={{ color: COLORS.White2 }}
                      />

                      <Text
                        style={{
                          fontSize: FONTSIZE.size_12,
                          color: COLORS.White2,
                          fontFamily: FONTFAMILY.regular,
                        }}
                      >
                        Share
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                      <FontAwesomeIcon icon={faPlay} size={26} style={{ color: COLORS.White1 }} />
                      <Text style={styles.textButton}>Play</Text>
                    </TouchableOpacity>

                    {currentUser?.id == playlist?.user_id ? (
                      <TouchableOpacity
                        style={styles.buttonExtra}
                        onPress={() => setIsOpenModalAddSong(!isOpenModalAddSong)}
                      >
                        <FontAwesomeIcon icon={faPlus} size={18} color={COLORS.White2} />
                        <Text
                          style={{
                            fontSize: FONTSIZE.size_12,
                            color: COLORS.White2,
                            fontFamily: FONTFAMILY.regular,
                          }}
                        >
                          Add
                        </Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={styles.buttonExtra}
                        onPress={() => mutationLike.mutate(isLike)}
                      >
                        <FontAwesomeIcon
                          icon={isLike ? faHeartSolid : faHeart}
                          size={18}
                          color={isLike ? COLORS.Red : COLORS.White2}
                        />
                        <Text
                          style={{
                            fontSize: FONTSIZE.size_12,
                            color: COLORS.White2,
                            fontFamily: FONTFAMILY.regular,
                          }}
                        >
                          Like
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>

                  <Text style={styles.textDesc}>{playlist?.desc}</Text>
                </View>
              }
              contentContainerStyle={{
                paddingBottom: HEIGHT.playingCard + 50,
              }}
              style={{ width: "100%" }}
              data={songs}
              renderItem={({ item, index }) => (
                <View key={index}>
                  <SongItem
                    song={item}
                    loading={loadingSongs}
                    playlistId={currentUser.id === playlist.user_id ? playlist.id : null}
                  />
                </View>
              )}
              ListFooterComponent={
                <View style={styles.wrapperFooter}>
                  <View
                    style={{
                      width: "100%",
                      paddingHorizontal: SPACING.space_12,
                      display: "flex",
                      flexDirection: "column",
                      gap: SPACING.space_8,
                    }}
                  >
                    <Text style={[styles.textMain]}>About artist</Text>
                    <ArtistItem userId={playlist?.user_id} />
                  </View>
                  <CategoryHeader
                    title={"Related playlists"}
                    style={{ paddingHorizontal: SPACING.space_10 }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      paddingHorizontal: SPACING.space_8,
                    }}
                  >
                    {playlists &&
                      playlists?.map((playlist, index) => {
                        return (
                          <View
                            key={index}
                            style={{
                              width: WINDOW_WIDTH / 2 - SPACING.space_8,
                              padding: SPACING.space_8,
                            }}
                          >
                            <PlaylistCard playlist={playlist} />
                          </View>
                        );
                      })}
                  </View>
                </View>
              }
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default PlaylistDetail;
