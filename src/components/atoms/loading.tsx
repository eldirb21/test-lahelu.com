import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import {colors} from '@constants';

type Props = {
  bordered?: boolean;
};
const Loading = ({bordered = false}: Props) => {
  return (
    <View style={[styles.loadMore, {borderTopWidth: bordered ? 1 : 0}]}>
      <ActivityIndicator size={35} color={colors.tabIconActive} />
    </View>
  );
};

export default memo(Loading);

const styles = StyleSheet.create({
  loadMore: {
    padding: 10,
    borderColor: colors.borderColor,
  },
});
