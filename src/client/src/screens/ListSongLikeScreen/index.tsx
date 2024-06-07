import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ListSongLikeScreenProps {}

const ListSongLikeScreen = (props: ListSongLikeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ListSongLikeScreen</Text>
    </View>
  );
};

export default ListSongLikeScreen;

const styles = StyleSheet.create({
  container: {}
});
