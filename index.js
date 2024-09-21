/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { AppCenter } from 'appcenter';

AppCenter.start('beb00daf-17bf-464e-a6d6-87e3c212345e', [
    AppCenterAnalytics,
    AppCenterCrashes
]);

AppRegistry.registerComponent(appName, () => App);
