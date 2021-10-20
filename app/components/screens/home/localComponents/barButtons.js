import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CameraButton from './cameraButton';

const BarButtons = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('Signin')}
        style={{...styles.button, ...styles.buttonLeft}}>
        <Icon name="person" size={20} color="#808080" />
        <Text style={styles.text}>{'Mi Perfíl'}</Text>
      </Pressable>
      <CameraButton
        onPress={() => {
          navigation.navigate('Review');
        }}
      />
      <Pressable style={{...styles.button, ...styles.buttonRight}}>
        <Text style={styles.text}>{'Mi lista '}</Text>
        <Icon name="view-list" size={20} color="#808080" />
      </Pressable>
    </View>
  );
};

export default BarButtons;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonRight: {
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
    marginLeft: -5,
  },
  buttonLeft: {
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
    marginRight: -5,
  },
  text: {
    fontWeight: 'bold',
    color: '#808080',
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5,
  },
});
