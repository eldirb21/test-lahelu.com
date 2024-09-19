import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {colors, fonts, scale, verticalScale} from '@constants';
import {Icons, Texts} from '@atoms';
import TopTab from './topTab';
import AppDrawer from './appDrawer';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAnimation} from '@hooks';

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
  headerShown?: any;
  headerAnimation?: boolean;
};

const HEADER_HEIGHT = verticalScale(45);

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
  headerShown,
  headerAnimation,
}: Props) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const insets = useSafeAreaInsets();

  const headerHeight = useAnimation.interpolates(
    headerShown,
    HEADER_HEIGHT,
    insets,
  );

  return (
    <Animated.View
      style={[
        style,
        headerAnimation && styles.headerContainer,
        {height: headerAnimation ? headerHeight : verticalScale(55)},
      ]}>
      <Animated.View
        style={[
          styles.topHeader,
          {height: headerAnimation ? headerHeight : verticalScale(55)},
        ]}>
        <View style={styles.drawer}>
          {showDrawer && (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setDrawerVisible(true)}
              style={styles.drawerbtn}>
              <Icons
                type="Ionicons"
                name="menu"
                size={fonts.size.font26}
                color={colors.textGrey}
              />
            </TouchableOpacity>
          )}
          {!onClose && (
            <Texts style={[styles.unclose, styles.textShadow]}>{title}</Texts>
          )}
          {onClose && <Texts style={[styles.close]}>{title}</Texts>}
        </View>

        {onSearch && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={onSearch}
            style={styles.iconbtn}>
            <Icons
              type="Ionicons"
              name="search"
              size={fonts.size.font24}
              color={colors.textGrey}
            />
          </TouchableOpacity>
        )}
        {onClose && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={onClose}
            style={styles.iconbtn}>
            <Icons
              type="Ionicons"
              name="close"
              size={fonts.size.font24}
              color={colors.textGrey}
            />
          </TouchableOpacity>
        )}
      </Animated.View>

      {tabs && (
        <TopTab data={tabs} selected={selectTab} onChange={onChangeTab} />
      )}
      {children}

      <AppDrawer
        isVisible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
      />
    </Animated.View>
  );
};

export default Appbar;

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: 'lightblue',
  },
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
  topHeader: {
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(10),
  },
  drawer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerbtn: {
    borderRadius: 100,
    marginRight: 15,
  },
  unclose: {
    color: colors.tabIconActive,
    fontFamily: fonts.type.poppinsBold,
    fontSize: fonts.size.font20,
  },
  close: {
    fontFamily: fonts.type.poppinsBold,
    fontSize: fonts.size.font14,
  },
});
