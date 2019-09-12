import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import ProgressBar from 'react-native-progress/Bar';
import _ from 'lodash';
import { styles } from './styles';
import {
  getAccessToken as getAccessTokenAPI,
  getPlayLists as getPlayListsAPI
} from '../../service/api';
import { Image } from '../../components';

class PlayListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playLists: []
    }
  }

  componentDidMount() {
    this.onInitial();
  }
  
  onInitial = async () => {
    const res = await getAccessTokenAPI();
    if (res.success) {
      const response = await getPlayListsAPI(RNLocalize.getCountry());
      if (response.success) {
        this.setState({ playLists: _.get(response.playlists, 'items', []) });
      }
    }
  }

  onPressItem = (item) => {
    this.props.navigation.navigate('TrackListScreen', { playlistID: item.id });
  };

  renderItem = ({ item, index }) => {
    const uri = _.get(item, 'images[0].url', null);
    return (
      <TouchableOpacity style={styles.playListItemContainer} onPress={() => this.onPressItem(item)}>
        {uri &&
          <Image
            source={{ uri }} 
            style={styles.playListImage}
            indicator={ProgressBar}
            indicatorProps={{
              size: 80,
              borderWidth: 0,
              color: 'rgba(150, 150, 150, 1)',
              unfilledColor: 'rgba(200, 200, 200, 0.2)'
            }}
          />
        }
        <View style={styles.playListSubInfoContainer}>
          <Text style={styles.itemText}>
            Title: <Text style={styles.itemBoldText}>
              {_.get(item, 'name', 'undefined')}
            </Text>
          </Text>
          <Text style={styles.itemText}>
            Number of Tracks: <Text style={styles.itemBoldText}>
              {_.get(item, 'tracks.total', '0')}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const { playLists } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={playLists}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `index-${index}`}
          ItemSeparatorComponent={this.renderSeparator}
          style={styles.playLists}
        />
      </SafeAreaView>
    );
  }
}

export default PlayListScreen;
