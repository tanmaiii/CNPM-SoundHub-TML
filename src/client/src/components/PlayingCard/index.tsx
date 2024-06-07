import { faForwardStep, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as React from "react";
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { songApi } from "../../apis";
import apiConfig from "../../configs/axios/apiConfig";
import IMAGES from "../../constants/images";
import { useAudio } from "../../context/AudioContext";
import { useAuth } from "../../context/AuthContext";
import { useBarSong } from "../../context/BarSongContext";
import { BORDERRADIUS, COLORS } from "../../theme/theme";
import { TSong } from "../../types";
import CustomBottomSheet from "../CustomBottomSheet";
import ModalPlaying from "../ModalPlaying";
import styles from "./style";
const { width, height } = Dimensions.get("window");

interface PlayingCardProps {}

const PlayingCard = (props: PlayingCardProps) => {
  const { openBarSong } = useBarSong();
  const { token } = useAuth();
  const [song, setSong] = React.useState<TSong | null>(null);
  const [loading, setLoading] = React.useState(false);
  const { playSound, stopSound, isPlaying, songIdPlaying, songDuration, currentPosition } =
    useAudio();
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  const progress = currentPosition ? (currentPosition / songDuration) * 100 : 0;

  const getSongs = async () => {
    setLoading(true);
    try {
      const res = await songApi.getDetail(songIdPlaying, token);
      setSong(res);
      console.log(res);
      setLoading(false);
    } catch (err) {
      console.log(err.response.data.conflictError);
    }
    setLoading(false);
  };

  const handlePlay = () => {
    isPlaying ? stopSound() : playSound(songIdPlaying);
  };

  React.useEffect(() => {
    songIdPlaying && getSongs();
  }, [songIdPlaying]);

  return openBarSong && song ? (
    <>
      <Pressable
        style={[styles.container, { width: width }]}
        onPress={() => setIsOpenModal(!isOpenModal)}
      >
        <ImageBackground
          source={song?.image_path ? { uri: apiConfig.imageURL(song.image_path) } : IMAGES.SONG}
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: BORDERRADIUS.radius_10,
          }}
          blurRadius={60}
        >
          <View style={styles.wrapper}>
            <View style={styles.left}>
              <View style={[styles.boxImage, styles.shadowProp]}>
                <Image
                  style={styles.image}
                  source={
                    song?.image_path ? { uri: apiConfig.imageURL(song.image_path) } : IMAGES.SONG
                  }
                />
              </View>
              <View>
                <Text style={styles.title}>{song?.title}</Text>
                <Text style={styles.artist}>{song?.author}</Text>
              </View>
            </View>
            <View style={styles.right}>
              <TouchableOpacity onPress={() => handlePlay()} style={styles.iconPlay}>
                {isPlaying ? (
                  <FontAwesomeIcon icon={faPause} size={24} color={COLORS.White1} />
                ) : (
                  <FontAwesomeIcon icon={faPlay} size={24} color={COLORS.White1} />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                disabled={true}
                style={styles.iconNext}
                onPress={() => {
                  console.log("pressed");
                }}
              >
                <FontAwesomeIcon icon={faForwardStep} size={26} color={COLORS.White1} />
              </TouchableOpacity>
            </View>
            <View style={styles.overlay} />
            <View style={styles.sliderBar}>
              <Animated.View style={[styles.slider, { width: `${progress}%` }, {}]} />
            </View>
          </View>
        </ImageBackground>
      </Pressable>
      {isOpenModal && (
        <CustomBottomSheet isOpen={true} closeModal={() => setIsOpenModal(false)} height1="100%">
          <ModalPlaying />
        </CustomBottomSheet>
      )}
    </>
  ) : (
    <></>
  );
};

export default PlayingCard;
