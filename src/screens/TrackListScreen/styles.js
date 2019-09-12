import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tracks: {
    marginVertical: 10
  },
  separator: {
    height: 10
  },
  trackItemContainer: {
    borderRadius: 5,
    marginHorizontal: 10,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 2,
    shadowOpacity: 1.0,
    elevation: 2,
    height: 70,
    flexDirection: 'row'
  },
  albumImage: {
    height: 70,
    width: 70,
    resizeMode: 'cover',
  },
  trackItemInfoContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 20
  },
  itemText: {
    fontSize: 15
  },
  itemBoldText: {
    fontWeight: 'bold'
  }
});
