import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/component/common'
import firebase from 'firebase'
import LoginForm from './src/component/LoginForm'

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBtFyVoc3RlqUYGYX7WYQ2VoO6ipGV0Xh0",
      authDomain: "authentication-7a5cc.firebaseapp.com",
      databaseURL: "https://authentication-7a5cc.firebaseio.com",
      projectId: "authentication-7a5cc",
      storageBucket: "authentication-7a5cc.appspot.com",
      messagingSenderId: "13565466816"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
