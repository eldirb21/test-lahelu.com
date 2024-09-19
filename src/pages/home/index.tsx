import React, {useRef, useState} from 'react';
import {Container} from '@atoms';
import {colors} from '@constants';
import {Appbar} from '@molecules';
import TabHome from './tabHome';
import TabFresh from './tabFresh';
import TabTrending from './tabTrending';
import Searched from './searched';
import {Animated} from 'react-native';

type Props = {};

const Home = (props: Props) => {
  const [tabSelect, settabSelect] = useState('Home');
  const [searchVisible, setSearchVisible] = useState(false);
  const scrolling = useRef(new Animated.Value(0)).current;

  return (
    <Container statusbar bgColor={colors.white} style={{position: 'relative'}}>
      <Appbar
        headerShown={scrolling}
        headerAnimation
        showDrawer
        title="AI"
        onSearch={() => setSearchVisible(true)}
        tabs={['Home', 'Fresh', 'Trending']}
        selectTab={tabSelect}
        onChangeTab={(val: any) => settabSelect(val)}
      />
      <TabHome
        tab={tabSelect}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrolling}}}],
          {useNativeDriver: false},
        )}
      />
      <TabFresh
        tab={tabSelect}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrolling}}}],
          {useNativeDriver: false},
        )}
      />
      <TabTrending
        tab={tabSelect}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrolling}}}],
          {useNativeDriver: false},
        )}
      />

      <Searched
        isVisible={searchVisible}
        onClose={() => setSearchVisible(false)}
      />
    </Container>
  );
};

export default Home;
