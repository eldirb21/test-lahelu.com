import * as React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabStack} from './navConstant';
import {Icons} from '@atoms';
import {colors, fonts, verticalScale} from '@constants';

function TabBar({state, descriptors, navigation}: any) {
  return (
    <View style={[styles.containerTabbar, styles.shadow]}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let iconName: any = null;
        let iconType: any = null;

        switch (label) {
          case 'Home':
            iconName = 'home';
            iconType = 'Feather';
            break;
          case 'Community':
            iconName = 'users';
            iconType = 'Feather';
            break;
          case 'Posting':
            iconName = 'plus-circle';
            iconType = 'Feather';
            break;
          case 'Account':
            iconName = 'account-circle-outline';
            iconType = 'MaterialCommunityIcons';
            break;

          default:
            iconName = 'home';
            iconType = 'Feather';
            break;
        }

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}>
            <Icons
              name={iconName}
              type={iconType}
              size={fonts.size.font26}
              color={isFocused ? colors.tabIconActive : colors.tabIconInActive}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <TabBar {...props} />}>
      {tabStack.map((item, index) => (
        <Tab.Screen key={index} name={item.path} component={item.component} />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  containerTabbar: {
    flexDirection: 'row',
    backgroundColor: colors.tabBackground,
    height: verticalScale(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  tabItemText: {},
  shadow: {
    shadowColor: colors.textDefault,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 1.0,
    shadowRadius: 2,
    elevation: 4,
  },
});
