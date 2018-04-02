import React from 'react';
import {StyleSheet, SectionList, FlatList, View, Text} from 'react-native';

export default class App extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devie']},
                        {title: 'J', data: ['Jack', 'James', 'Jullian', 'Jimmy', 'Joey']},
                        {title: 'V', data: ['Vox', 'Vine', 'Vouch']},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 40,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#FEC32E'
    }
});