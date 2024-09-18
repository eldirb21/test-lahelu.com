import React from 'react';
import {Image, ImageStyle, StyleSheet, View} from 'react-native';

type AvatarProps = {
  uri: string;
  size?: number;
  style?: ImageStyle;
};

const Avatar: React.FC<AvatarProps> = ({uri, size = 50, style}) => {
  return (
    <View
      style={[
        styles.container,
        {width: size, height: size, borderRadius: size / 2},
      ]}>
      <Image
        source={{uri}}
        style={[
          styles.avatar,
          {width: size, height: size, borderRadius: size / 2},
          style,
        ]}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
});

export default Avatar;
