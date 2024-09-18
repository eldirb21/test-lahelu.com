import React from 'react';
import {View, StatusBar} from 'react-native';

type Props = {
  barBackground: string;
  [key: string]: any;
};

const Statusbars: React.FC<Props> = props => {
  const {barBackground, ...rest} = props;
  return (
    <View>
      <StatusBar translucent backgroundColor={barBackground} {...rest} />
    </View>
  );
};

export default Statusbars;
