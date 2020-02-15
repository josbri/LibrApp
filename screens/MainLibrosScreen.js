import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


class MainLibrosScreen extends Component {
    static navigationOptions = {
        title: 'Mis Libros',
    };

    render(){
        return(
            <View style={styles.Container}>
               <Button style={styles.botonNuevo} title="Nuevo Libro" color="#f194ff" />     
            </View>

        )
    }
} 

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center'
    },
    botonNuevo: {
        marginTop: 20,
    }
    // apuestaText: {
    //     margin: 10,
    //     marginTop: 42,
    //     fontSize: 27,
    //     fontWeight: "bold",
    //     color: 'white',
    // },
    // input: {
    //     height: 60,
    //     width: 100,
    //     backgroundColor: 'rgba(0,0,0,0.3)',
    //     paddingLeft: 10,
    //     paddingRight: 10,
    //     color: 'white',
    //     marginBottom: 30
    // },
})

export default MainLibrosScreen;