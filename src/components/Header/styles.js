import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
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
  backIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  },
  backContainer: {
    position: 'absolute',
    left: 10,
    top: 10,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
})