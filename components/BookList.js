import React from 'react'
import { View } from 'react-native'
import   Book   from './Book'
import { useNavigation } from '@react-navigation/native';

const BookList = ({ books, viewBookDetails, navigation }) => {
    books = books.map((book) =>{
        return (
            <Book 
                key={book.id}
                book={book}
                viewBookDetails={viewBookDetails}
                navigation={navigation}
            />
        )
    })
    return (
        <View style={{marginBottom: 15, fontWeight: "bold"}}>
            {books}
        </View>
    )
}

export default BookList
