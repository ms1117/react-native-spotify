import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const Header = ({ title, onBack }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.blackBoldText} numberOfLines={1}>
        {title}
      </Text>
      <TouchableOpacity style={styles.backContainer} onPress={onBack}>
        <Image source={require('../../assets/icon_back.png')} style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
}