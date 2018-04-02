import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';

export default class App extends React.Component {

    render() {
        return (
            <ScrollView>
                <Text style={{fontSize:196}}>Scroll me plz</Text>

                <Text style={{fontSize:196}}>If you like</Text>

                <Text style={{fontSize:196}}>Scrolling down</Text>

                <Text style={{fontSize:196}}>What's the best</Text>

                <Text style={{fontSize:196}}>Framework around?</Text>

                <Text style={{fontSize:180}}>React Native</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center',
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#FEC32E',
    },
    buttonText: {
        padding: 20,
        color: 'white'
    },
});