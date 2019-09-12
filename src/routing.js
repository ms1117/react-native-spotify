import { createAppContainer,  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { PlayListScreen, TrackListScreen, TrackDetailScreen } from './screens';

const AppNavigator = createStackNavigator({
  PlayListScreen: {
    screen: PlayListScreen,
  },
  TrackListScreen: {
    screen: TrackListScreen
  },
  TrackDetailScreen: {
    screen: TrackDetailScreen
  }
}, {
  initialRouteName: 'PlayListScreen',
  headerMode: 'none'
});

export default createAppContainer(AppNavigator);
