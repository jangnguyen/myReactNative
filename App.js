import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

export default class App extends React.Component {

    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press me"
                        color="#841584"/>
                </View>
                <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title='This look great!'/>
                    <Button
                        onPress={this._onPressButton}
                        title={'OK!'}
                        color={"#7C55FB"}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin:20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
});