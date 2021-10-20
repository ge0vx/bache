import React from 'react';
import {SafeAreaView, StyleSheet, Button} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import {connect} from 'react-redux';
import {GET_ALL_USER_INFO_REQUEST} from '../../../models/user/actions';

const mapStateToProps = (state, props) => {
  const {id, name, email} = state.user;
  return {id, name, email};
};

const mapDispatchToProps = (dispatch, props) => ({
  getAllUserInfo: () => {
    dispatch({
      type: GET_ALL_USER_INFO_REQUEST,
      payload: {},
    });
  },
});

const ReviewScreen = ({id, name, email, getAllUserInfo, navigation}) => {
  const [{cameraFef}, {takePicture}] = useCamera(null);

  return (
    <SafeAreaView style={styles.container}>
      <RNCamera
        ref={cameraFef}
        type={RNCamera.Constants.Type.back}
        style={styles.preview}>
        <Button title="Tomar Foto" />
      </RNCamera>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

const Review = connect(mapStateToProps, mapDispatchToProps)(ReviewScreen);
export {Review};
