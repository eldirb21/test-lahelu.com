import Account from '@pages/account';
import Splash from '@pages/auth/splash';
import Home from '@pages/home';
import TabStack from './tabStack';
import Community from '@pages/community';
import Posting from '@pages/posting';

const authStack = [
  {
    path: 'Splash',
    component: Splash,
  },
  {
    path: 'TabStack',
    component: TabStack,
  },
];

const tabStack = [
  {
    path: 'Home',
    component: Home,
  },
  {
    path: 'Community',
    component: Community,
  },
  {
    path: 'Posting',
    component: Posting,
  },
  {
    path: 'Account',
    component: Account,
  },
];

export {authStack, tabStack};
