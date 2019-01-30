import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from "react-redux";
import {generateStore} from "./store/store";

const store = generateStore();

const ReduxApp = () => (
  <Provider store={store}>
      <App/>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
