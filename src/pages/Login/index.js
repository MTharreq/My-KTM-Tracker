import React, { useState, useCallback } from 'react';
import { 
  Button,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  View,
  StatusBar,
} from 'react-native'; 
import { PRIMARY_COLOR } from '../../styles/color';
// import * as SplashScreen from 'expo-splash-screen';

{/* const Login = ({ navigation }) => { */}
// SplashScreen.preventAutoHideAsync();

export default function Login({navigation}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // handle login logic here
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={-250}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.imgContainer} >
            <Image style={{width: 150, height: '20%', resizeMode: 'contain', marginBottom: 30}}
              source={require('../../assets/images/logo.png')}
            />
            <Image style={{width: '80%', height: '65%',  resizeMode: 'contain', backgroundColor: 'white',}}
              source={require('../../assets/images/flat-illustration.png')}
            />
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.h1}>SSO Login</Text>
            <TextInput
              style={styles.input}
              placeholder="SSO Username"
              onChangeText={setUsername}
              value={username}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
            />
            {/*
            <View style={styles.remember}>

              <View style={styles.checkboxContainer}>
                <TouchableOpacity style={styles.checkBox} onPress={handleLogin}></TouchableOpacity>
              <Text style={styles.h2}>Remember me</Text>
              </View>
              <Text style={styles.h2}>Forgot Password?</Text>
            </View>
            */}
            <TouchableOpacity style={styles.button} onPress={() =>
              navigation.navigate('MainApp')
            }>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: 150,

  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 8,
    fontFamily: 'PlusJakartaSans_400Regular',
  },
  button: {
    marginTop: 30,
    width: '80%',
    height: 40,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 20,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans_600SemiBold',
  },
  h1: {
    width: '80%',
    color: '#372F2F',
    fontSize: 22,
    // fontWeight: 'bold',
    marginBottom: 12,
    fontFamily: "PlusJakartaSans_700Bold",
  },
  // remember: {
  //   width: '80%',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  // checkBox: {
  //   width: 24,
  //   height: 24,
  //   bottom: 2,
  //   marginRight: 4,
  //   borderWidth: 2,
  //   borderRadius: 5,
  //   borderColor: '#EA5455',
  // },
  // checkboxContainer: {
  //   flexDirection: 'row',
  // },
  inner: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

{/* export default Login;  */}