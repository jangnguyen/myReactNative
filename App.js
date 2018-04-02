import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import {
    Platform,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback
} from 'react-native';

export default class App extends React.Component {

    /* Bên ngoài JSX*/
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    /**/
    _onLongPressButton() {
        Alert.alert('Mày vừa bấm long-press đó cu!')
    }

    /* Ví dụ về comment  bên ngoài JSX*/
    render() {
        return (
            /*Content chứa*/
            <View style={styles.container}>
                {/*TouchableHighlight - Chớp 1 cái nhè nhẹ*/}
                <TouchableHighlight onPress={this._onPressButton} underlayColor={'white'}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            1. TouchableHighlight
                        </Text>
                    </View>
                </TouchableHighlight>

                {/*TouchableOpacity - mờ rồi từ từ trong lại dần*/}
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            2. TouchableOpacity
                        </Text>
                    </View>
                </TouchableOpacity>

                {/**/}
                <TouchableWithoutFeedback
                    onLongPress={this._onLongPressButton}
                    underlayColor={'white'}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            3. Touchable without Feedback
                        </Text>
                    </View>
                </TouchableWithoutFeedback>


                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            4. Touchable Native
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
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