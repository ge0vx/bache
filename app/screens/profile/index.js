import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {GET_ALL_USER_INFO_REQUEST} from '../../models/user/actions';

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

const ProfileScreen = ({id, name, email, getAllUserInfo, navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
});

const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
export {Profile};
