/* eslint-disable prettier/prettier */
import React from 'react';
import  { DefaultTheme,
          Provider as PaperProvider,
          Button,
          TextInput,
        } from 'react-native-paper';
import {  ImageBackground,
          View,
          StyleSheet,
          ScrollView,
          Text,
        } from 'react-native';
import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import {GET_ALL_USER_INFO_REQUEST} from '../../../models/user/actions';
import {FormBuilder} from 'react-native-paper-form-builder';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

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

const LogInScreen = ({id, name, email, getAllUserInfo, navigation}) => {
  const {control, setFocus, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  return (
    <View style={styles.containerStyle}>
      <ImageBackground
        style={ styles.imgBackground }
        resizeMode="cover"
        source={require('./../../src/image/log_in.jpg')}>
        <ScrollView contentContainerStyle={styles.scrollViewStyle}>
          <Text style={styles.headingStyle}>Log in</Text>
          <FormBuilder
            control={control}
            setFocus={setFocus}
            formConfigArray={[
              {
                type: 'text',
                name: 'user',
                rules: {
                  required: {
                    value: true,
                    message: 'User is required',
                  },
                },
                textInputProps: {
                  label: 'Username',
                  left: <TextInput.Icon name={'account'} />,
                },
              },
              {
                type: 'password',
                name: 'password',
                rules: {
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                },
                textInputProps: {
                  label: 'Password',
                  left: <TextInput.Icon name={'lock'} />,
                },
              },
            ]}
          />
          <Button
            mode={'contained'}
            style={styles.logInButton}
            >
            Log in
          </Button>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  scrollViewStyle: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
    color:'#fff'
  },
  formInputs: {
    opacity: 0.5,
  },
  logInButton: {
    backgroundColor: '#000',
    color: '#000',
  },
});

const Login = connect(mapStateToProps, mapDispatchToProps)(LogInScreen);
export {Login};
