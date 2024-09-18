import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import {Container, Texts} from '@atoms';
import {colors, fonts} from '@constants';

type Props = {
  navigation: any;
};

const Splash = ({navigation}: Props) => {
  const isFocused: any = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      sessionCheck();
    }
  }, [isFocused]);

  const sessionCheck = () => {
    const token = true;
    if (token) {
      navigation.navigate('TabStack');
    } else {
      navigation.navigate('Login');
    }
  };

  return (
    <Container
      statusbar
      barStyle="light-content"
      style={styles.container}
      bgColor={colors.splash}>
      <Texts style={styles.logo}>Lahelu</Texts>
    </Container>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.splash,
  },
  logo: {
    fontFamily: fonts.type.poppinsBold,
    fontSize: fonts.size.font20,
    color: colors.tabIconActive,
  },
});
