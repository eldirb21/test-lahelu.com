import {Animated, StyleSheet} from 'react-native';
import React from 'react';
import {Texts} from '@atoms';
import {colors, fonts, verticalScale, widthDimension} from '@constants';
import {TouchableOpacity} from 'react-native';

type Props = {
  data?: any;
  selected?: any;
  onChange?: (item: string) => void;
  heights?: any;
};

const TopTab = ({
  data,
  heights = verticalScale(40),
  selected,
  onChange,
}: Props) => {
  return (
    <Animated.View
      style={[
        {height: !isNaN(heights) ? heights / 2 : heights},
        styles.tabContainer,
      ]}>
      {data.map((item: any, index: any) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => onChange?.(item)}
            key={index}
            style={{
              borderBottomWidth: selected === item ? 2 : 0,
              width: widthDimension / data?.length || 0,
              ...styles.tabItem,
            }}>
            <Texts
              style={{
                color:
                  selected === item ? colors.tabIconActive : colors.textDefault,
                fontFamily: fonts.type.poppinsSemiBold,
              }}>
              {item}
            </Texts>
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

export default TopTab;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.borderColor,
    borderTopWidth: 0.5,
  },
  tabItem: {
    borderColor: colors.tabIconActive,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
