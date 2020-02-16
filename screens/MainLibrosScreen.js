import React, { Component } from 'react';
import {View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native'


import { addBook, removeBook } from '../reducers/actions'
import { connect } from 'react-redux'
import  BookList  from '../components/BookList';

const initialState = {
    name: '',
    author: '',
    id: '',
    genre: '',
}

class MainLibrosScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: 'Mis Libros',
        }
      };
      
    state = initialState
    constructor(props){
        super(props);

        this.viewBookDetails = this.viewBookDetails.bind(this)

    }
    componentDidMount() {
        console.log(this.props)
        console.log(this.props.books)
        console.log(this.state)
    }
    updateInput = (key, value) => {
        this.setState({
            ...this.state,
            [key]: value
        })
    }

    addBook = () => {
        this.props.dispatchAddBook(this.state)
        this.setState(initialState)
    }

    removeBook = (book) => {
        this.props.dispatchRemoveBook(book)
    }

      //Con navigate vamos a Detalles, y le enviamos la información del evento seleccionado.
    viewBookDetails(book) {
        console.log(book)
        
       this.props.navigation.navigate('Detalles', {book: JSON.stringify(book)});
    }
    render() {
        const { books } = this.props
        return (
            <View style={styles.container}>
                 <Button style={styles.botonNuevo} title="Nuevo Libro" color="#006352" onPress={this.addBook}/>     
                <Text style={styles.Header}>Libros</Text>
                <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
                    <BookList books={books} viewBookDetails={this.viewBookDetails} navigation={this.props.navigation}/>
                </ScrollView>
            </View>
        )
    }
}

const mapDispatchToProps = {
    dispatchAddBook: (book) => addBook(book),
    dispatchRemoveBook: (book) => removeBook(book)
}

const mapStateToProps = (state) => ({
    books: state.bookReducer.books
})


const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#f8f7f2',
        flex: 1,
        alignItems: 'center'
    },
    botonNuevo: {
        marginTop: 20,
    },
    Header: {
        fontSize: 30,
        alignSelf: "center",
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MainLibrosScreen)