import {StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Drawer, Texts} from '@atoms';
import {colors, fonts, widthDimension} from '@constants';
import {Appbar} from '@molecules';

type Props = {
  isVisible?: boolean;
  onClose?: () => void;
};

const Searched = ({isVisible, onClose}: Props) => {
  const [search, setsearch] = useState('');

  const handlerClose = () => {
    onClose?.();
    setsearch('');
  };
  return (
    <Drawer
      isLeft={false}
      isVisible={isVisible}
      width={widthDimension}
      onClose={handlerClose}>
      <Appbar style={styles.appbar} title="Cari meme" onClose={handlerClose} />

      <View>
        <TextInput
          placeholder="Tulis judul, username, atau tag..."
          placeholderTextColor={colors.textGrey}
          onChangeText={val => setsearch(val)}
          style={styles.input}
          value={search}
        />
        <View style={{flex: 1, alignItems: 'center'}}>
          <Texts style={styles.nodata}>riwayat kosong</Texts>
        </View>
      </View>
    </Drawer>
  );
};

export default Searched;

const styles = StyleSheet.create({
  appbar: {
    marginLeft: -10,
    marginRight: -10,
    marginTop: -10,
    backgroundColor: 'red',
    borderBottomWidth: 1,
    borderColor: colors.borderColor,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    borderColor: colors.borderColor,
    color: colors.textDefault,
    fontFamily: fonts.type.poppinsRegular,
    fontSize: fonts.size.font12,
  },
  nodata: {
    color: colors.textGrey,
    fontStyle: 'italic',
    fontSize: fonts.size.font14,
  },
});
