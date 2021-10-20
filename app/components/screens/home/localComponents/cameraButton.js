import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, StyleSheet} from 'react-native';

export default function CameraButton({onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name="camera-alt" size={55} color="#808080" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 60,
    borderColor: '#808080',
    borderWidth: 1,
    zIndex: 1,
  },
});
