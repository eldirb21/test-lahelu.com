import {StyleSheet} from 'react-native';
import React from 'react';
import {Container, NoData} from '@atoms';
import {colors} from '@constants';
import {Appbar} from '@molecules';

type Props = {};

const Community = (props: Props) => {
  return (
    <Container statusbar bgColor={colors.white}>
      <Appbar withlogo showDrawer title="Lahelu" onSearch={() => {}} />
      <NoData
        title="Coming Soon"
        message="This feature is under development and will be available soon!"
      />
    </Container>
  );
};

export default Community;

const styles = StyleSheet.create({});
