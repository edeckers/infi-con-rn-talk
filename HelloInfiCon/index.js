/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';

AppRegistry.registerComponent(appName, () => App);
MessageQueue.spy(true);