// Index.ios.js - place code in here for IOS!!!


//  Import a library to help a create a component
import React from 'react';
import {  AppRegistry, View } from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

// Create a component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albuns'}/>
        <AlbumList/>
    </View>
);


// Render it in device
AppRegistry.registerComponent('albums', () => App);