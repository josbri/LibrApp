import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native'
import { Card, Icon} from 'react-native-elements'

class BookDetails extends Component {
  
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            book: JSON.parse(props.navigation.state.params.book)
        }
    }
      static navigationOptions = {
        title: 'Mis Libros',
    };

    render() {
        const { book } = this.state

        return (
            <View style={styles.Container}>
                <Card
                    title={book.name}
                    //image={require('../images/pic2.jpg')}
                    >
                    <Text style={{ marginBottom: 10 }}>
                        Autor: {book.author} {'\n'}
                        Género: {book.genre}
                    </Text>
                    <Button
                        icon={<Icon name='Eliminar' color='#ffffff' />}
                        color="#630"
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='Eliminar Libro' />
                </Card>
            </View>
        )

    }
}
const styles = StyleSheet.create({

})


export default BookDetails


