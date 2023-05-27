import React, { useState } from 'react';
import { 
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
import { PRIMARY50, NEUTRAL20 } from '../../styles/color';


export default function Login({navigation}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={-250}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.containerImg} >
            <Image style={{width: 150, height: '20%', resizeMode: 'contain', marginBottom: 30}}
              source={require('../../assets/images/logo.png')}
            />
            <Image style={{width: '80%', height: '65%',  resizeMode: 'contain', backgroundColor: 'white',}}
              source={require('../../assets/images/flat-illustration.png')}
            />
          </View>

          <View style={styles.containerContent}>
            <Text style={styles.h1}>SSO Login</Text>
            <TextInput
              style={styles.input}
              placeholder="SSO Username"
              placeholderTextColor="#B1A9A9" 
              onChangeText={setUsername}
              value={username}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#B1A9A9" 
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
            />
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
  // b
  button: {
    marginTop: 30,
    width: '80%',
    height: 40,
    backgroundColor: PRIMARY50,
    borderRadius: 20,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  
  // c
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImg: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  //h
  h1: {
    width: '80%',
    color: '#372F2F',
    fontSize: 22,
    marginBottom: 12,
    fontFamily: "PlusJakartaSans-Bold",
    color: NEUTRAL20,
  },
  
  // i
  inner: {
    flex: 1,
    justifyContent: 'space-around',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 8,
    fontFamily: 'PlusJakartaSans-Regular',
  },
});