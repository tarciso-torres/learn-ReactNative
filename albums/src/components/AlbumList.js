//  Import a library for make a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Create a component
class AlbumList extends Component {
    componentWillMount() {
        console.log('ComponentWillMont in AlbumList');
        debugger;
    }

    render () {
        return (
            <View>
                <Text>Album List!!!</Text>
            </View>
        );
    }   
}

export default AlbumList;