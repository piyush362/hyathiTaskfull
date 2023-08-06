import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ComingSoon = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Coming Soon</Text>
        </View>
    )
}

export default ComingSoon

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingtop: 40,
        padding: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'green',
        padding: 20,
        color: 'white',
    }
})