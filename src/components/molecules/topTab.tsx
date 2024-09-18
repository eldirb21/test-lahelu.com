import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Texts} from '@atoms';
import {colors, fonts, scale, widthDimension} from '@constants';
import {TouchableOpacity} from 'react-native';

type Props = {
  data?: any;
  selected?: any;
  onChange?: (item: string) => void;
};

const TopTab = ({data, selected, onChange}: Props) => {
  return (
    <View
      style={{
        height: scale(40),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderColor: colors.borderColor,
        borderTopWidth: 0.5,
      }}>
      {data.map((item: any, index: any) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => onChange?.(item)}
            key={index}
            style={{
              borderBottomWidth: selected === item ? 2 : 0,
              width: widthDimension / data?.length || 0,
              borderColor: colors.tabIconActive,
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
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
    </View>
  );
};

export default TopTab;

const styles = StyleSheet.create({});
