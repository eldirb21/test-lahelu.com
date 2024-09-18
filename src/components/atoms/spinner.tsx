import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '@constants';

type Props = {
  visible?: boolean;
  style?: any;
  background?: string;
};

const Spinner = ({visible, style, background}: Props) => {
  const styled = [
    style,
    styles.spinner,
    {backgroundColor: background ? background : colors.overley},
  ];

  return (
    <Modal visible={visible} transparent statusBarTranslucent>
      <View style={styled}>
        <ActivityIndicator size={'small'} color={colors.white} />
      </View>
    </Modal>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
});
