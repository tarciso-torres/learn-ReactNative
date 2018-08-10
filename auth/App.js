import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Button } from './src/component/common'
import firebase from 'firebase'
import LoginForm from './src/component/LoginForm'

export default class App extends React.Component {
  state = {loggedIn: null}
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBtFyVoc3RlqUYGYX7WYQ2VoO6ipGV0Xh0",
      authDomain: "authentication-7a5cc.firebaseapp.com",
      databaseURL: "https://authentication-7a5cc.firebaseio.com",
      projectId: "authentication-7a5cc",
      storageBucket: "authentication-7a5cc.appspot.com",
      messagingSenderId: "13565466816"
    });

    firebase.auth.onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true})
      } else {
        this.setState({ loggedIn: false})
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true: 
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}