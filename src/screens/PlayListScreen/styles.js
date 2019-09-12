import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  separator: {
    height: 10
  },
  playLists: {
    marginVertical: 10
  },
  playListItemContainer: {
    borderRadius: 5,
    marginHorizontal: 10,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 2,
    shadowOpacity: 0.9,
    elevation: 2
  },
  playListImage: {
    height: 200,
    resizeMode: 'cover',
  },
  itemText: {
    fontSize: 18
  },
  itemBoldText: {
    fontWeight: 'bold'
  },
  playListSubInfoContainer: {
    backgroundColor: 'white'
  }
});
