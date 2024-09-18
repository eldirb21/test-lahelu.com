import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import {colors} from '@constants';

const Loading = () => {
  return (
    <View style={styles.loadMore}>
      <ActivityIndicator size={35} color={colors.tabIconActive} />
    </View>
  );
};

export default memo(Loading);

const styles = StyleSheet.create({
  loadMore: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: colors.borderColor,
  },
});
