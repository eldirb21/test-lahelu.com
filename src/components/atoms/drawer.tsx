import React, {useState} from 'react';
import {
  Animated,
  TouchableOpacity,
  View,
  StyleSheet,
  Modal,
} from 'react-native';
import {colors, scale, widthDimension} from '@constants';
import {Container} from '@atoms';

const Drawer = ({
  isVisible,
  isLeft = true,
  width = widthDimension * 0.75,
  onClose,
  children = <View />,
}: any) => {
  const [animationValue] = useState(
    new Animated.Value(isLeft ? -widthDimension : widthDimension),
  );

  const toggleDrawer = () => {
    Animated.timing(animationValue, {
      toValue: isVisible ? 0 : isLeft ? -widthDimension : widthDimension,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    toggleDrawer();
  }, [isVisible, isLeft]);

  return (
    <Animated.View
      style={[
        styles.drawerContainer,
        {transform: [{translateX: animationValue}]},
      ]}>
      <Modal visible={isVisible} animationType="slide" transparent>
        <TouchableOpacity
          onPress={onClose}
          activeOpacity={0.9}
          style={styles.overlay}
        />

        <View style={{...styles.drawer, width}}>
          <Container
            scrolled
            statusbar
            barStyle="dark-content"
            bgColor={colors.disableColor}>
            {children}
          </Container>
        </View>
      </Modal>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: scale(-45),
    width: widthDimension,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .06)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: widthDimension,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .06)',
    zIndex: 0,
  },
  drawer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    zIndex: 999,
  },
  closeButton: {
    alignItems: 'flex-end',
    padding: 10,
  },
  closeButtonText: {
    color: 'red',
    fontWeight: 'bold',
  },
  navItem: {
    marginVertical: 10,
  },
  navText: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Drawer;
