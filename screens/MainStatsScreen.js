import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


class MainStatsScreen extends Component {
    static navigationOptions = {
        title: 'Estadisticas',
        headerRight: () => (
            //Text vacio para centrar el headerTitle.
            <Text></Text>
        ),
    };


    render(){

        return(
            <View>
                <Text>
                    Hola desde Estadisticas.
                </Text>
            </View>

        )
    }
} 

export default MainStatsScreen;