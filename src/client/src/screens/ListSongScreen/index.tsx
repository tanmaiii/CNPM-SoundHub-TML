import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ListSongScreenProps {}

const ListSongScreen = (props: ListSongScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ListSongScreen</Text>
    </View>
  );
};

export default ListSongScreen;

const styles = StyleSheet.create({
  container: {}
});
