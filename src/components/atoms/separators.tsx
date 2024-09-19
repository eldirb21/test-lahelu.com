import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '@constants';

const Separators = () => {
  return <View style={styles.separator} />;
};

export default Separators;

const styles = StyleSheet.create({
  separator: {
    height: 4,
    backgroundColor: colors.separator,
  },
});
