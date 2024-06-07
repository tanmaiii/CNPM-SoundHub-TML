import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ListPlaylistScreenProps {}

const ListPlaylistScreen = (props: ListPlaylistScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ListPlaylistScreen</Text>
    </View>
  );
};

export default ListPlaylistScreen;

const styles = StyleSheet.create({
  container: {}
});
