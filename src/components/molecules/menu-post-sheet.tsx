import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors, fonts, menuActions} from '@constants';
import {TouchableOpacity} from 'react-native';
import {BottomSheet, Icons, Texts} from '@atoms';

type Props = {
  menuRef?: any;
  onChangeMenu?: (item: any) => void;
};

const MenuPostSheet = ({menuRef, onChangeMenu}: Props) => {
  const customStyles = {
    container: styles.bottomSheet,
  };

  return (
    <BottomSheet ref={menuRef} customStyles={customStyles}>
      <View style={styles.head}>
        <Texts style={styles.title}>Pilihan</Texts>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => menuRef.current.close()}>
          <Icons
            name="close"
            size={fonts.size.font16}
            color={colors.textDefault}
          />
        </TouchableOpacity>
      </View>

      <View>
        {menuActions.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => onChangeMenu?.(item)}
              key={index}
              style={styles.itemMenu}>
              <Icons
                name={item.icon}
                type={item.iconType}
                size={fonts.size.font20}
                color={item.id === 4 ? colors.danger : colors.secondary}
              />
              <Texts
                style={{
                  marginLeft: 10,
                  color: item.id === 4 ? colors.danger : colors.secondary,
                }}>
                {item.title}
              </Texts>
            </TouchableOpacity>
          );
        })}
      </View>
    </BottomSheet>
  );
};

export default MenuPostSheet;

const styles = StyleSheet.create({
  bottomSheet: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.borderColor,
    borderBottomWidth: 1,
    padding: 10,
  },
  title: {
    fontFamily: fonts.type.poppinsSemiBold,
    fontSize: fonts.size.font16,
  },
  itemMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
});
