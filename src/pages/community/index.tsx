import {StyleSheet} from 'react-native';
import React from 'react';
import {Container} from '@atoms';
import {colors} from '@constants';
import {Appbar} from '@molecules';

type Props = {};

const Community = (props: Props) => {
  return (
    <Container statusbar bgColor={colors.white}>
      <Appbar title="Ai" />
    </Container>
  );
};

export default Community;

const styles = StyleSheet.create({});
