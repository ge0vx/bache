/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import {GET_ALL_USER_INFO_REQUEST} from '../../../models/user/actions';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import BarButtons from './localComponents/barButtons';
import {customStyleMap} from './styles/viewMap';

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

const HomeScreen = ({id, name, email, getAllUserInfo, navigation}) => {
  const handleLocationPermission = async () => {
    let permissionCheck = '';
    if (Platform.OS === 'ios') {
      permissionCheck = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

      if (
        permissionCheck === RESULTS.BLOCKED ||
        permissionCheck === RESULTS.DENIED
      ) {
        const permissionRequest = await request(
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        );
        permissionRequest === RESULTS.GRANTED
          ? console.warn('Location permission granted.')
          : console.warn('location permission denied.');
      }
    }
    if (Platform.OS === 'android') {
      permissionCheck = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

      if (
        permissionCheck === RESULTS.BLOCKED ||
        permissionCheck === RESULTS.DENIED
      ) {
        const permissionRequest = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
        permissionRequest === RESULTS.GRANTED
          ? console.warn('Location permission granted.')
          : console.warn('location permission denied.');
      }
    }
  };

  useEffect(() => {
    handleLocationPermission();
  }, []);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setCurrentPosition({latitude, longitude});
      },
      error =>
        setCurrentPosition({error: {code: error.code, message: error.message}}),
      {enableHighAccuracy: false, timeout: 10000},
    );
  }, []);

  const [currentPosition, setCurrentPosition] = useState({
    latitude: 0,
    longitude: 0,
    error: null,
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {currentPosition && (
        <MapView
          style={styles.map}
          customMapStyle={customStyleMap} 
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsBuildings={true}
          maxZoomLevel={20.5}
          loadingIndicatorColor="#fcb103"
          showsUserLocation={true}
          showsMyLocationButton={false}
        />
      )}
      <BarButtons navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginBottom: -30,
  },
});

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
export {Home};
