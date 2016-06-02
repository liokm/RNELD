import { observable, computed, asStructure, asReference } from 'mobx';
import {
  Dimensions,
  NetInfo
} from 'react-native';

class UIStore {
  // layout dimensions
  @observable layout = asStructure({
    width: 0,
    height: 0,
    windowWidth: 0,
    windowHeight: 0,
    scale: 0,
    fontScale: 0,

    onLayout({nativeEvent: {layout: {width, height}}}: {nativeEvent: {layout: {width: number, height: number}}}) {
      const {width: windowWidth, height: windowHeight, scale, fontScale } = Dimensions.get('window');
      Object.assign(this, {width, height, windowWidth, windowHeight, scale, fontScale});
    },

    isPortrait() {
      return this.width < this.height;
    }
  })

  // netinfo
  @observable connectionInfo: string
  handleConnectionInfoChange = e => this.connectionInfo = e

  componentDidMount() {
    NetInfo.addEventListener('change', this.handleConnectionInfoChange);
    NetInfo.fetch().done(this.handleConnectionInfoChange);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('change', this.handleConnectionInfoChange);
  }
}

export const uistore = new UIStore();
