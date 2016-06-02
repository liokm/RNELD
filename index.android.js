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

import { uistore } from './src/store/ui';
import { observer } from 'mobx-react/native';

class Button extends Component {
  render() {
    const {text, fontSize=14} = this.props;
    return <View style={[{padding: 8, margin: 8, backgroundColor: '#3d98d3', borderRadius: 2}, this.state]} onLayout={({nativeEvent: {layout: {width}}}) => this.setState({width: Math.max(64, width)})}>
      <Text style={{textAlign: 'center', fontFamily: 'roboto', fontSize, fontWeight: 'bold', color: 'white'}}>{text.toUpperCase()}</Text>
    </View>
  }
}
// const Button = ({text}) => {
//   return <View style={{padding: 8, margin: 8, minWidth: 64, backgroundColor: '#3d98d3'}}>
//     <Text style={{fontFamily: 'roboto', fontSize: 14, fontWeight: 'bold', color: 'white'}}>{text.toUpperCase()}</Text>
//   </View>
// };

@observer
class RNELD extends Component {
  componentDidMount() {
    uistore.componentDidMount();
  }

  componentWillUnmount() {
    uistore.componentWillUnmount();
  }

  render() {
      const fonts = [
          { type: 'Body1', size: 20 },
          { type: 'BUTTON', size: 22 },
          { type: 'Caption', size: 16 },
          { type: 'Subhead', size: 24 },
          { type: 'Title', size: 28 },
          { type: 'Headline', size: 34 },
          { type: 'Large', size: 26 },
          { type: 'Medium', size: 22 },
          { type: 'Small', size: 18 },
          { type: 'Menu', size: 22 },
      ];
    return (
      <View style={styles.container} onLayout={e => uistore.layout.onLayout(e)}>

      <Text>{JSON.stringify(uistore.layout)} {JSON.stringify(uistore.layout.isPortrait)} {JSON.stringify(uistore.connectionInfo)}</Text>
      {fonts.map(({type, size}, i) => {
        return <Text style={{fontSize: size, fontFamily: 'roboto'}} key={i}>{type}</Text>
      })}

      <Button text="standard button" />
      <Button text="ok" />
      <Button text="min" />
      <Button text="22dp button" fontSize={22} />
      <View style={{height:4, width: 64, backgroundColor: 'red'}}/>
      {/*fonts.map((x, i) => {
          return <View key={x}>
          <View style={{width: x, height: x, backgroundColor: 'red'}}/>
          <Text style={{fontSize: x, fontFamily: 'roboto'}}>{x} quick brown foxes JUMP OVER</Text>
          <View style={{ backgroundColor:'#3498db', padding: 8, borderRadius: 2, alignItems: 'center' }}>

          <Text style={{fontSize: x, fontFamily: 'roboto', color: 'white', fontWeight:'bold', padding: 0, margin: 0}}>{x} CONFIRM</Text>

          </View>
          </View>;
      })*/}


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
