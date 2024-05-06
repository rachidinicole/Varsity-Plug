import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/core'; 
//import { auth } from '../firebase';


import image2 from './images/image6.jpg'; 

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();
  const nav = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        nav.navigate("Home")
      }
    })
  }, [])

  const handleLogin = () => {
     // Your login logic here
     //const auth = getAuth();

     signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         const user = userCredential.user;
         console.log('Log in:', { email, password });
 
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log('Login unsuccessful: ', {errorCode, errorMessage})
       });
  };
  const handleRegisterPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <ImageBackground source={image2} style={styles.imageBackground}>
      <Text style={styles.appName}>WELCOME TO </Text>
        <Text style={styles.appName}>VARSITY PLUG</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
          <Button title="Login" onPress={handleLogin} />
          <TouchableOpacity onPress={handleRegisterPress}>
            <Text style={styles.registerText}>Don't have an account? Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000080',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxWidth: 400,
    alignSelf: 'center',
    justifyContent: 'flex-end', 
    height: 'auto',
    marginBottom:  430,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  registerText: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
  },
});

export default LoginScreen;




