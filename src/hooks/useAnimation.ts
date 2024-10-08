import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useEffect, useRef} from 'react';
import {Animated, Easing, Platform} from 'react-native';

const useAnimation = {
  tab: (scaleAnim: Animated.Value | Animated.ValueXY, toValue: any) => {
    Animated.spring(scaleAnim, {
      toValue: toValue,
      useNativeDriver: true,
    }).start();
  },
  useEffectAnimation(animated = false) {
    const slideAnim = useRef(new Animated.Value(500)).current;

    useEffect(() => {
      if (animated) {
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 1500,
          easing: Easing.out(Easing.sin),
          useNativeDriver: false,
        }).start();
      }
    }, [animated, slideAnim]);

    useFocusEffect(
      useCallback(() => {
        if (animated) {
          slideAnim.setValue(300);
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 1500,
            easing: Easing.out(Easing.sin),
            useNativeDriver: false,
          }).start();
        }

        return () => {};
      }, [animated, slideAnim]),
    );

    return slideAnim;
  },
  fadeAnimation: (
    fadeValue: Animated.Value,
    duration: number = 1000,
    func: () => void,
  ) => {
    return Animated.timing(fadeValue, {
      toValue: 1,
      duration,
      useNativeDriver: false,
    }).start(func);
  },

  interpolates: (headerShown: any, HEADER_HEIGHT: any, insets: any) => {
    const headerHeight = headerShown?.interpolate({
      inputRange: [
        0,
        Platform.OS === 'ios' ? HEADER_HEIGHT : HEADER_HEIGHT + insets.top,
      ],
      outputRange: [
        Platform.OS === 'ios' ? HEADER_HEIGHT : HEADER_HEIGHT + insets.top,
        Platform.OS === 'ios' ? 0 : insets.top + 0,
      ],
      extrapolate: 'clamp',
    });

    return headerHeight;
  },
};

export default useAnimation;
