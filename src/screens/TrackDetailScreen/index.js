import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { View, Text, ScrollView } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import _ from 'lodash';
import { styles } from './styles';
import { Image, Header } from '../../components';
import { millisecondsToTime } from '../../utils';

class TrackDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.onInitial();
  }

  onInitial = () => {
    const { navigation } = this.props;
  }

  onBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { navigation } = this.props;
    const largeURI = _.get(navigation.state, 'params.trackItem.track.album.images[0].url', null);
    const artists = _.get(navigation.state, 'params.trackItem.track.artists', null);
    const album = _.get(navigation.state, 'params.trackItem.track.album', null);
    return (
      <SafeAreaView style={styles.container}>
        <Header 
          title={_.get(navigation.state, 'params.trackItem.track.name', 'undefined')}
          onBack={this.onBack}
        />
        {largeURI &&
          <Image
            source={{ uri: largeURI }}
            style={styles.albumImage}
            indicator={ProgressBar}
            indicatorProps={{
              size: 80,
              borderWidth: 0,
              color: 'rgba(150, 150, 150, 1)',
              unfilledColor: 'rgba(200, 200, 200, 0.2)'
            }}
          />
        }
        <ScrollView style={styles.mainInfoContainer}>
          <View style={styles.mainInfoSubContainer}>
            <Text style={styles.itemText}>
              {artists.length === 1 ? 'Artist: ' : 'Artists: '}
            </Text>
            <Text style={styles.itemBoldText}>
              {artists.map((artist, index) => index === artists.length - 1 ?  artist.name : `${artist.name}, ` )}
            </Text>
          </View>
          <View style={styles.albumContainer}>
            <Text style={styles.itemText}>
              Album
            </Text>
            <Text style={styles.itemSubText}>
              Name: <Text style={styles.itemBoldText}>
                {album.name}
              </Text>
            </Text>
            <Text style={styles.itemSubText}>
              Release Date: <Text style={styles.itemBoldText}>
                {album.release_date}
              </Text>
            </Text>
            <Text style={styles.itemSubText}>
              Total tracks: <Text style={styles.itemBoldText}>
                {album.total_tracks}
              </Text>
            </Text>
            <View style={styles.mainInfoSubContainer}>
              <Text style={styles.itemText}>
                {'Duration: '}
              </Text>
              <Text style={styles.itemBoldText}>
                {millisecondsToTime(_.get(navigation.state, 'params.trackItem.track.duration_ms', 0))}
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default TrackDetailScreen;
