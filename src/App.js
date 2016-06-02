'use strict';

import React, {
  AppRegistry,
  StyleSheet,
  View,
  TouchableHighlight,
  Text
} from 'react-native';
import { observer } from 'mobx-react/native';
//import uiStore from './store/ui.js';


class App extends React.Component {
    render() {
        const { store } = this.props;
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={ () => store.inc() }>
                    <Text>|   -   | </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={ () => store.dec() }>
                    <Text>|   +   | </Text>
                </TouchableHighlight>

                <Text>Clicked: {store.counter} times</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default function init() {
  let  WrappedApp = React.createClass({
    render() {
      return (
          <View>
          </View>
          <WrappedApp store={counterStore} />
      );
    }
  });

  AppRegistry.registerComponent('WrappedApp', () => WrappedApp);
}
