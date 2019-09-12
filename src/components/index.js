import { createImageProgress } from 'react-native-image-progress';
import FastImage from 'react-native-fast-image';
import { Header } from './Header';

const Image = createImageProgress(FastImage);

export {
  Image,
  Header
}