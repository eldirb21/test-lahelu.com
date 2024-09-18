import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, fonts, scale, verticalScale} from '@constants';
import Texts from './texts';

type Props = {
  title?: string;
  message?: string;
  style?: any;
  icon?: any;
};

const NoData = ({
  title = 'No data',
  message = 'No data found',
  style,
  icon,
}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <View style={{marginBottom: scale(20)}}>{icon}</View>
      <Texts style={styles.title}>{title}</Texts>
      <Texts style={styles.message}>{message}</Texts>
    </View>
  );
};

export default NoData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(-100),
    paddingHorizontal: verticalScale(40),
  },
  title: {
    textAlign: 'center',
    fontSize: fonts.size.font16,
    marginBottom: 10,
  },
  message: {
    textAlign: 'center',
    color: colors.colorGrey,
  },
});
