import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Drawer, Icons, Texts} from '@atoms';
import {colors, drawerScreen, fonts} from '@constants';
import {TouchableOpacity} from 'react-native';

type Props = {
  isVisible: boolean;
  onClose?: () => void;
};

const AppDrawer = ({isVisible, onClose}: Props) => {
  return (
    <Drawer showClose={false} isVisible={isVisible} onClose={onClose}>
      <View
        style={{
          borderWidth: 1,
          borderColor: colors.borderColor,
          borderRadius: 10,
          padding: 15,
        }}>
        <Texts
          style={{
            textAlign: 'center',
            fontSize: fonts.size.font16,
            fontFamily: fonts.type.poppinsBold,
          }}>
          Mau ngepost meme kamu sendiri?
        </Texts>
        <Texts>Login dengan Google sekarang!</Texts>

        <TouchableOpacity
          style={{
            backgroundColor: colors.tabIconActive,
            padding: 6,
            borderRadius: 20,
            alignItems: 'center',
            width: '50%',
            alignSelf: 'center',
            marginTop: 8,
          }}>
          <Texts
            style={{
              color: colors.white,
              fontFamily: fonts.type.poppinsSemiBold,
            }}>
            Login
          </Texts>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginVertical: 15,
          borderBottomWidth: 1,
          borderColor: colors.borderColor,
        }}>
        {drawerScreen.tab.map((x, i) => {
          return (
            <TouchableOpacity
              key={i}
              activeOpacity={0.7}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
              }}>
              <Icons
                name={x.icon}
                type={x.iconType}
                size={fonts.size.font24}
                color={colors.textTertiary}
              />
              <Texts style={{marginLeft: 15}}>{x.path}</Texts>
            </TouchableOpacity>
          );
        })}
      </View>
    </Drawer>
  );
};

export default AppDrawer;

const styles = StyleSheet.create({});
