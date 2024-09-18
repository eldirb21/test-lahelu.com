import React, {useState} from 'react';
import {Container} from '@atoms';
import {colors} from '@constants';
import {Appbar} from '@molecules';
import TabHome from './tabHome';
import TabFresh from './tabFresh';
import TabTrending from './tabTrending';
import Searched from './searched';

type Props = {};

const Home = (props: Props) => {
  const [tabSelect, settabSelect] = useState('Home');
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <Container statusbar bgColor={colors.white} style={{position: 'relative'}}>
      <Appbar
        showDrawer
        title="AI"
        onSearch={() => setSearchVisible(true)}
        tabs={['Home', 'Fresh', 'Trending']}
        selectTab={tabSelect}
        onChangeTab={(val: any) => settabSelect(val)}
      />
      <TabHome tab={tabSelect} />
      <TabFresh tab={tabSelect} />
      <TabTrending tab={tabSelect} />

      <Searched
        isVisible={searchVisible}
        onClose={() => setSearchVisible(false)}
      />
    </Container>
  );
};

export default Home;
