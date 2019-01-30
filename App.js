import React, {Component} from 'react';
import Navigator from "./Navigator";
import {View, StatusBar} from "react-native"

export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar 
          backgroundColor="#808080"
          barStyle="light-content"
        />
        <Navigator/>
      </View>
      
    );
  }
}