import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import _ from 'lodash';
import { styles } from './styles';
import { getTracks as getTracksAPI } from '../../service/api';
import { Image, Header } from '../../components';

class TrackListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    }
    this.offset = 0;
  }

  componentDidMount() {
    this.onInitial();
  }

  onInitial = async () => {
    const playlistID = this.props.navigation.state.params.playlistID;
    const res = await getTracksAPI(playlistID, this.offset);
    if (res.success) {
      if (res.result.next) {
        this.offset += 10;
      }
      this.setState({ tracks: res.result.items });
    }
  }

  onPressItem = (trackItem) => {
    this.props.navigation.navigate('TrackDetailScreen', { trackItem });
  }

  onBack = () => {
    this.props.navigation.goBack();
  }

  renderTracks = ({ item, index }) => {
    // const smallURI = _.get(item, 'track.album.images[2].url', null);
    const mediumURI = _.get(item, 'track.album.images[1].url', null);
    const largeURI = _.get(item, 'track.album.images[0].url', null);
    const uri = mediumURI || largeURI;
    return (
      <TouchableOpacity style={styles.trackItemContainer} onPress={() => this.onPressItem(item)}>
        {uri &&
          <Image
            source={{ uri }} 
            style={styles.albumImage}
            indicator={ProgressBar}
            indicatorProps={{
              size: 5,
              borderWidth: 0,
              color: 'rgba(150, 150, 150, 1)',
              unfilledColor: 'rgba(200, 200, 200, 0.2)'
            }}
          />
        }
        <View style={styles.trackItemInfoContainer}>
          <Text style={styles.itemText} numberOfLines={1}>
            Name: <Text style={styles.itemBoldText}>
              {_.get(item, 'track.name', 'undefined')}
            </Text>
          </Text>
          <Text style={styles.itemText} numberOfLines={1}>
            Artist: <Text style={styles.itemBoldText}>
              {_.get(item, 'track.artists[0].name', 'undefined')}
            </Text>
          </Text>
          <Text style={styles.itemText} numberOfLines={1}>
            Popularity: <Text style={styles.itemBoldText}>
              {_.get(item, 'track.popularity', 'undefined')}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderSeparator = () => <View style={styles.separator} />;

  render() {
    const { tracks } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Header 
          title="Track List"
          onBack={this.onBack}
        />
        <FlatList
          data={tracks}
          renderItem={this.renderTracks}
          keyExtractor={(item, index) => `index-${index}`}
          ItemSeparatorComponent={this.renderSeparator}
          style={styles.tracks}
        />
      </SafeAreaView>
    );
  }
}

export default TrackListScreen;
