import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blackBoldText: {
    fontSize: 18,
    fontWeight: 'bold',
    width: (width / 3) * 2,
    textAlign: 'center'
  },
  albumImage: {
    height: (height / 4) * 2.5,
    resizeMode: 'cover'
  },
  mainInfoContainer: {
    marginTop: 10,
    marginHorizontal: 20
  },
  itemText: {
    color: 'black',
    fontSize: 15
  },
  itemSubText: {
    color: 'black',
    fontSize: 13,
    marginLeft: 20
  },
  itemBoldText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  mainInfoSubContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  albumContainer: {
    marginTop: 10
  }
});
