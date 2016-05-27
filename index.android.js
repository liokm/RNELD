/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PixelRatio,
  ScrollView
} from 'react-native';

import { observer } from 'mobx';

class RNELD extends Component {
  render() {
    const fonts = [12, 14, 16, 18, 20, 22, 24, 28, 32, 45];
    return (
      <View style={styles.container}>


      <Text>{JSON.stringify(Dimensions.get('window'))}</Text>
      {fonts.map((x, i) => {
          return <View key={x}>
          <View style={{width: x, height: x, backgroundColor: 'red'}}/>
          <Text style={{fontSize: x, fontFamily: 'roboto'}}>{x} quick brown foxes JUMP OVER</Text>
          <View style={{ backgroundColor:'#3498db', padding: 8, borderRadius: 2, alignItems: 'center' }}>

          <Text style={{fontSize: x, fontFamily: 'roboto', color: 'white', fontWeight:'bold', padding: 0, margin: 0}}>{x} CONFIRM</Text>

          </View>
          </View>;
      })}


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNELD', () => RNELD);
