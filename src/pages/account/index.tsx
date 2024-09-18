import {StyleSheet} from 'react-native';
import React from 'react';
import {Container} from '@atoms';
import {colors} from '@constants';
import {Appbar} from '@molecules';

type Props = {};

const Account = (props: Props) => {
  return (
    <Container statusbar bgColor={colors.white}>
      <Appbar title="AI" />
    </Container>
  );
};

export default Account;

const styles = StyleSheet.create({});
