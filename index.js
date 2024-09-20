/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { AppCenter } from 'appcenter';

AppCenter.start('9a4f64c6-9b2a-4c9a-af04-91c73a1ac55e', [
    AppCenterAnalytics,
    AppCenterCrashes
]);

AppRegistry.registerComponent(appName, () => App);
