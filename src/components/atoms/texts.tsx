import React from 'react';
import {StyleSheet, TextProps, Text} from 'react-native';
import {colors, fonts} from '@constants';

const Texts: React.FC<TextProps> = ({...props}) => {
  const defStyle = [styles.textDefault];
  const incStyle = Array.isArray(props.style) ? props.style : [props.style];

  return <Text {...props} style={[...defStyle, ...incStyle]} />;
};

const styles = StyleSheet.create({
  textDefault: {
    fontSize: fonts.size.font12,
    fontFamily: fonts.type.poppinsRegular,
    color: colors.textDefault,
  },
});

export default Texts;
