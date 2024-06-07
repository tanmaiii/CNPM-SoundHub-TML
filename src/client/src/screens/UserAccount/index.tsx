import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface UserAccountProps {}

const UserAccount = (props: UserAccountProps) => {
  return (
    <View style={styles.container}>
      <Text>UserAccount</Text>
    </View>
  );
};

export default UserAccount;

const styles = StyleSheet.create({
  container: {}
});
