import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Book = ({ book, viewBookDetails }) => (
    
    <View style={styles.eventoContainer}>
        <View style={styles.TextContainer}>
            <Text onPress={() => viewBookDetails(book)} style={styles.bookText} >
                Titulo: {book.name}
            </Text>
            <Text>
                Autor: {book.author}{'\n'}
                Género: {book.genre}
            </Text>
        </View>
    </View>
)
const styles = StyleSheet.create({
    eventoContainer: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed',
        paddingLeft: 14,
        paddingTop: 7,
        paddingBottom: 7,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        flexDirection: 'row',
        alignItems: 'center'
    },
    TextContainer: {
        justifyContent: 'center'
    },
    bookText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#333333'
    },
    buttons: {
        flex: 1,
        //flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})

export default Book