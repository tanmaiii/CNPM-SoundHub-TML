import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface GenreScreenProps {}

const GenreScreen = (props: GenreScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>GenreScreen</Text>
    </View>
  );
};

export default GenreScreen;

const styles = StyleSheet.create({
  container: {}
});
