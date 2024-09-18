import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  ReactNode,
} from 'react';
import {
  Animated,
  PanResponder,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
  View,
  StyleSheet,
  ModalProps,
  KeyboardAvoidingViewProps,
} from 'react-native';

interface BottomSheetProps {
  height?: number;
  openDuration?: number;
  closeDuration?: number;
  closeOnPressMask?: boolean;
  closeOnPressBack?: boolean;
  draggable?: boolean;
  dragOnContent?: boolean;
  useNativeDriver?: boolean;
  customStyles?: {
    wrapper?: object;
    container?: object;
    draggableIcon?: object;
    zIndex?: number;
  };
  customModalProps?: ModalProps;
  customAvoidingViewProps?: KeyboardAvoidingViewProps;
  onOpen?: () => void;
  onClose?: () => void;
  children?: ReactNode;
}

const BottomSheet = forwardRef<any, BottomSheetProps>((props, ref) => {
  const {
    height = 230,
    openDuration = 300,
    closeDuration = 200,
    closeOnPressMask = true,
    closeOnPressBack = false,
    draggable = false,
    dragOnContent = false,
    useNativeDriver = false,
    customStyles = {},
    customModalProps = {},
    customAvoidingViewProps = {},
    onOpen = null,
    onClose = null,
    children = <View />,
  } = props;

  const [modalVisible, setModalVisible] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const pan = useRef(new Animated.ValueXY()).current;

  useImperativeHandle(ref, () => ({
    open: () => handleSetVisible(true),
    close: () => handleSetVisible(false),
  }));

  const createPanResponder = () => {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => draggable,

      onMoveShouldSetPanResponder: (e, gestureState) =>
        draggable && dragOnContent && gestureState.dy > 0,

      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          Animated.event([null, {dy: pan.y}], {useNativeDriver})(
            e,
            gestureState,
          );
        }
      },

      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dy > 100) {
          handleSetVisible(false);
        } else {
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            useNativeDriver,
          }).start();
        }
      },
    });
  };

  const panResponder = useRef(createPanResponder()).current;

  const handleSetVisible = (visible: boolean) => {
    if (visible) {
      setModalVisible(visible);
      onOpen && onOpen();
      Animated.timing(animatedHeight, {
        useNativeDriver,
        toValue: height,
        duration: openDuration,
      }).start();
    } else {
      Animated.timing(animatedHeight, {
        useNativeDriver,
        toValue: 0,
        duration: closeDuration,
      }).start(() => {
        setModalVisible(visible);
        pan.setValue({x: 0, y: 0});
        onClose && onClose();
      });
    }
  };

  return (
    <Modal
      testID="Modal"
      transparent
      statusBarTranslucent
      visible={modalVisible}
      onRequestClose={
        closeOnPressBack ? () => handleSetVisible(false) : undefined
      }
      {...customModalProps}>
      <KeyboardAvoidingView
        testID="KeyboardAvoidingView"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.wrapper, customStyles.wrapper]}
        {...customAvoidingViewProps}>
        <TouchableOpacity
          testID="TouchableOpacity"
          style={styles.mask}
          activeOpacity={1}
          onPress={closeOnPressMask ? () => handleSetVisible(false) : undefined}
        />
        <Animated.View
          testID="AnimatedView"
          {...(dragOnContent && panResponder.panHandlers)}
          style={[
            styles.container,
            {transform: pan.getTranslateTransform()},
            {height: animatedHeight},
            {zIndex: customStyles.zIndex || 1},
            customStyles.container,
          ]}>
          {draggable && (
            <View
              testID="DraggableView"
              {...(!dragOnContent && panResponder.panHandlers)}
              style={styles.draggableContainer}>
              <View
                testID="DraggableIcon"
                style={[styles.draggableIcon, customStyles.draggableIcon]}
              />
            </View>
          )}
          {children}
        </Animated.View>
      </KeyboardAvoidingView>
    </Modal>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#00000077',
  },
  mask: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: 0,
    overflow: 'hidden',
  },
  draggableContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  draggableIcon: {
    width: 35,
    height: 5,
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#ccc',
  },
});
