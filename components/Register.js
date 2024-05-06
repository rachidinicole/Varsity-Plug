import React, { useState } from 'react';
import { ScrollView, View, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth' 
import { firebase } from '@react-native-firebase/auth'
import { auth } from '../firebaseConfig';


import image2 from './images/image6.jpg'; 

const SignUpScreen = ({ navigation }) => {
  const [surname, setSurname] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [personNumber, setPersonNumber] = useState('');
  const [password, setPassword] = useState('');
/*
  const handleSignUp = () => {
    //console.log('Login:', { email, password });
    auth
    .createUserWithEmailAndPassword(email, password)
    .then (userCredential => {
      const user = userCredentials.user;
      console.log(user.email)
    })
    .catch(error => alert(error.message))
  };
*/

  const handleSignUp = () => {   
    // Your sign-up logic here
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        onChangeLoggedInUser(user.email);
        console.log('Sign Up:', { surname, name, email, personNumber, email, password });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };


/*
  const handleSignUp = async () => {
    try {
      const email1 = email;
      const pass = password;

      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);

      const user = userCredential.user;
      console.log('User signed up:', user.uid);
    }
    catch (error) {
      console.error('Sign up error:', error.code, error.message);
    }
  }
*/
  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <ImageBackground source={image2} style={styles.imageBackground}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Surname"
            value={surname}
            onChangeText={(text) => setSurname(text)}
            />
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
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
            placeholder="Contact Number"
            value={contactNumber}
            onChangeText={(text) => setContactNumber(text)}
            keyboardType='numeric'
            />
          <TextInput
            style={styles.input}
            placeholder="Student Number"
            value={personNumber}
            onChangeText={(text) => setPersonNumber(text)}
            keyboardType='numeric'
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
          <Button title="Sign Up" onPress={handleSignUp} />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.goBackText}>Go Back to Login</Text>
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
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  goBackText: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
  },
});

export default SignUpScreen;