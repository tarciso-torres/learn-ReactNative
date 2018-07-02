// Index.ios.js - place code in here for Android!!!


//  Import a library to help a create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';


// Create a component
const App = () => (
        <Text>Some Text</Text>
    );


// Render it in device
AppRegistry.registerComponent('albuns', () => App);