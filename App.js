import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Image} from 'react-native';

export default class App extends React.Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (

            <View style={styles.container}>

                {/*Flexbox ghi trên nhánh Learning*/}
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
                </View>
            </View>
        );
    }
}

// Cái này là tự tạo một cái Greeting customize
class Greeting extends React.Component {
    render() {
        return (
            <Text style={styles.red2}> Hello {this.props.name}!</Text>
        );
    }
}

class Blink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isShowingText: true};

        setInterval(() => {
            this.setState(previousState => {
                return {isShowingText: !previousState.isShowingText};
            });
        }, 1000);
    }

    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <Text style={[styles.bigblue, styles.red2, styles.violet]}>{display}</Text>
        );
    }
}

const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
        },
        view1: {
            backgroundColor: 'powderblue',
            flex: 2,
        },
        view2: {
            backgroundColor: '#E984FA',
            flex: 1,
        },
        view3: {
            backgroundColor: '#FEC32E',
            flex: 2,
        },
        image: {
            height: 250,
            flex: 1,
        },
        bigblue: {
            color: 'blue',
            fontWeight: 'bold',
            fontSize: 30,
        },
        red: {
            color: 'red',
        },
        red2: {
            color: 'red',
            fontSize: 16,
        },
        violet: {
            color: '#7C55FB',
            alignItems: 'center',
            justifyContent: 'center',
        }
    });