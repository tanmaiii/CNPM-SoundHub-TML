import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface EditProfileProps {}

const EditProfile = (props: EditProfileProps) => {
  return (
    <View style={styles.container}>
      <Text>EditProfile</Text>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {}
});
