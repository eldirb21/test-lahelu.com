import {widthDimension} from '@constants';
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ImageBackgroundProps,
  StyleSheet,
  Image,
} from 'react-native';

type FullImageProps = {
  uri: string;
} & ImageBackgroundProps;

const FullImage: React.FC<FullImageProps> = ({
  uri,
  style,
  children,
  ...restProps
}) => {
  const [imageHeight, setImageHeight] = useState<number | null>(null);

  useEffect(() => {
    Image.getSize(uri, (width, height) => {
      const screenWidth = widthDimension;
      const scaleFactor = width / screenWidth;
      const imgHeight = height / scaleFactor;
      setImageHeight(imgHeight);
    });
  }, [uri]);

  if (imageHeight === null) {
    return null;
  }

  return (
    <ImageBackground
      style={[styles.imageBackground, {height: imageHeight}, style]}
      source={{uri}}
      resizeMode="contain"
      {...restProps}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
  },
});

export default FullImage;
