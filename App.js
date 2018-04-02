import React from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';

export default class App extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Giang'},
                        {key: 'Huy'},
                        {key: 'Phuong'},
                        {key: 'Quynh'},
                        {key: 'Hai'},
                        {key: 'Thuy'},
                        {key: 'Hong'},
                        {key: 'Tuan'},
                        {key: 'Vy'},
                        {key: 'Ngoc'},
                        {key: 'Trong'},
                        {key: 'Hoang'},
                        {key: 'Quy'},
                        {key: 'Linh'},
                        {key: 'Thanh'},
                        {key: 'Tien'},
                        {key: 'Thang'},
                        {key: 'Tan'},
                        {key: 'Nhi'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});