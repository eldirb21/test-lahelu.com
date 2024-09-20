import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from '@nav/authStack';
import codePush from 'react-native-code-push';

type Props = {};

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
};

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

// export default App;
export default codePush(codePushOptions)(App);

const styles = StyleSheet.create({});
