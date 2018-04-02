import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native';

export default class App extends React.Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (

            <View style={styles.container}>

                {/*Flexbox ghi trên nhánh Learning*/}
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}></View>
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
                </View>

                {/* Vi du ve PROPS */}
                <View style={styles.view1}>
                    <Greeting name='Giang'/>
                    <Greeting name='Huân'/>
                    <Greeting name='Phương'/>
                    {/*VI DU VE IMAGE*/}
                    <Image source={pic} style={styles.image}/>

                    {/*Vi du ve TEXT*/}
                    <Text>Mở file App.js code trong đó và sẽ thấy điều kì diệu!</Text>
                    <Text>Ahihi</Text>
                </View>

                {/* Vi du ve STATE*/}
                <View style={styles.view2}>
                    <Blink style={styles.red} text='I love to blink'/>
                    <Blink style={styles.bigblue} text='Yes blinking is so great'/>
                    <Blink style={[styles.bigblue, styles.red]} text='Why did they ever take this out of HTML'/>
                    <Blink style={[styles.red, styles.bigblue]} text='Look at me look at me!!!'/>
                </View>

                {/*Ví dụ về style*/}
                <View style={styles.view3}>
                    <Text style={styles.red}>Dòng này có chớp chớp hay hok cà. Ko chớp và màu đỏ nhỏ</Text>
                    <Text style={styles.bigblue}>Dòng này màu xanh bự bự nè</Text>
                    <Text style={[styles.bigblue, styles.red]}>Dòng này màu đỏ bự</Text>
                    <Text style={[styles.red, styles.bigblue]}>Dòng này thì màu xanh bự bự do bị chồng màu xanh lên mày
                        đỏ</Text>
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