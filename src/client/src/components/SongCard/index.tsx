import * as React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import IMAGES from "../../constants/images";
import { TSong } from "../../types/song.type";

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import apiConfig from "../../configs/axios/apiConfig";
import { NavigationProp } from "../../navigators/TStack";
import { COLORS } from "../../theme/theme";
import SongCardSkeleton from "./SongCardSkeleton";
import styles from "./style";

interface SongCardProps {
  loading?: boolean;
  song: TSong;
}

const SongCard = (props: SongCardProps) => {
  const { song, loading = false } = props;
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate("Song", { songId: song.id });
  };

  if (loading) {
    return <SongCardSkeleton />;
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container]}>
        <View style={styles.wrapperImage}>
          <Image
            style={[styles.image]}
            source={song?.image_path ? { uri: apiConfig.imageURL(song.image_path) } : IMAGES.SONG}
          />
          <View style={styles.buttonPlay}>
            <FontAwesomeIcon icon={faPlay} size={24} color={COLORS.White1} />
          </View>
        </View>

        <View style={{ gap: 2 }}>
          <Text numberOfLines={1} style={styles.textTitle}>
            {song?.title}
          </Text>
          <Text numberOfLines={2} style={styles.textDes}>
            {song?.author}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SongCard;
