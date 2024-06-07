import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface UpdateItemProps {}

const UpdateItem = (props: UpdateItemProps) => {
  return (
    <View style={styles.container}>
      <Text>UpdateItem</Text>
    </View>
  );
};

export default UpdateItem;

const styles = StyleSheet.create({
  container: {}
});
