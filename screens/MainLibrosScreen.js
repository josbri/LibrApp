import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

import { addBook, removeBook } from '../reducers/actions'
import { connect } from 'react-redux'



const initialState = {
    name: '',
    author: ''
  }

class MainLibrosScreen extends Component {
    static navigationOptions = {
        title: 'Mis Libros',
    };

    state = initialState
  
    componentDidMount(){
        console.log(this.props.books)
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
    

    render(){
        const { books } = this.props.books
        return(
            <View style={styles.Container}>
               <Button style={styles.botonNuevo} title="Nuevo Libro" color="#006352" />     
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MainLibrosScreen)