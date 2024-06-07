import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface LibraryScreenProps {}

const LibraryScreen = (props: LibraryScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>LibraryScreen</Text>
    </View>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  container: {}
});
