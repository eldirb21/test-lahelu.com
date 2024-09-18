import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {colors, fonts, scale, verticalScale} from '@constants';
import {Drawer, Icons, Texts} from '@atoms';
import TopTab from './topTab';
import AppDrawer from './appDrawer';

type Props = {
  title?: any;
  showDrawer?: boolean;
  onSearch?: () => void;
  onClose?: () => void;
  children?: ReactNode;
  selectTab?: any;
  tabs?: any;
  onChangeTab?: any;
  style?: any;
};

const Appbar = ({
  title,
  selectTab,
  children = <View />,
  showDrawer = false,
  onSearch,
  onClose,
  tabs,
  onChangeTab,
  style,
}: Props) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <View style={style}>
      <View
        style={[
          {
            height: verticalScale(45),
            backgroundColor: colors.white,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: scale(10),
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {showDrawer && (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setDrawerVisible(true)}
              style={{
                borderRadius: 100,
                marginRight: 15,
              }}>
              <Icons type="Ionicons" name="menu" size={fonts.size.font26} />
            </TouchableOpacity>
          )}
          {!onClose && (
            <Texts
              style={[
                {
                  color: colors.tabIconActive,
                  fontFamily: fonts.type.poppinsBold,
                  fontSize: fonts.size.font20,
                },
                styles.textShadow,
              ]}>
              {title}
            </Texts>
          )}
          {onClose && (
            <Texts
              style={[
                {
                  fontFamily: fonts.type.poppinsBold,
                  fontSize: fonts.size.font14,
                },
              ]}>
              {title}
            </Texts>
          )}
        </View>

        {onSearch && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={onSearch}
            style={styles.iconbtn}>
            <Icons type="Ionicons" name="search" size={fonts.size.font24} />
          </TouchableOpacity>
        )}
        {onClose && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={onClose}
            style={styles.iconbtn}>
            <Icons type="Ionicons" name="close" size={fonts.size.font24} />
          </TouchableOpacity>
        )}
      </View>

      {tabs && (
        <TopTab data={tabs} selected={selectTab} onChange={onChangeTab} />
      )}
      {children}

      <AppDrawer
        isVisible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      />
    </View>
  );
};

export default Appbar;

const styles = StyleSheet.create({
  textShadow: {
    textShadowColor: colors.splash,
    textShadowRadius: 5,
    textShadowOffset: {
      width: -2,
      height: 2,
    },
  },
  iconbtn: {
    borderRadius: 100,
  },
});
