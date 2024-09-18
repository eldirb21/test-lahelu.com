import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, fonts, scale, widthDimension} from '@constants';
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
    height: widthDimension * 1.75,
  },
  title: {
    textAlign: 'center',
    fontSize: fonts.size.font14,
    fontFamily: fonts.type.poppinsSemiBold,
    color: colors.textGrey,
  },
  message: {
    textAlign: 'center',
    color: colors.textGrey,
    fontStyle: 'italic',
  },
});
