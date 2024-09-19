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
      <View style={{margin:10}}/>
      <View style={styles.messageCard}>
        <Texts style={styles.messageTitle}>
          Mau ngepost meme kamu sendiri?
        </Texts>
        <Texts>Login dengan Google sekarang!</Texts>

        <TouchableOpacity style={styles.btnLogin}>
          <Texts style={styles.btnLoginText}>Login</Texts>
        </TouchableOpacity>
      </View>

      <View style={styles.drawerMenuContainer}>
        {drawerScreen.tab.map((x, i) => {
          return (
            <TouchableOpacity
              key={i}
              activeOpacity={0.7}
              style={styles.drawerMenuItem}>
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

const styles = StyleSheet.create({
  messageCard: {
    borderWidth: 1.2,
    borderColor: colors.borderColor,
    borderRadius: 10,
    padding: 15,
  },
  messageTitle: {
    textAlign: 'center',
    fontSize: fonts.size.font16,
    fontFamily: fonts.type.poppinsBold,
  },
  btnLogin: {
    backgroundColor: colors.tabIconActive,
    padding: 6,
    borderRadius: 20,
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
    marginTop: 8,
  },
  btnLoginText: {
    color: colors.white,
    fontFamily: fonts.type.poppinsSemiBold,
  },
  drawerMenuContainer: {
    marginVertical: 15,
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
  },
  drawerMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
