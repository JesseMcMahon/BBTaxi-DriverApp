import React from "react"
import {View, Text, StyleSheet} from "react-native"


const Stats = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your Driver History</Text>
            <Text style={styles.noHistoryMessage}>No history to display at this time</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 100,
        alignItems: 'center'
    },

    header: {
        color: '#71cdda',
        fontSize: 40,
        fontWeight: '200',
        marginBottom: 100
    },
    noHistoryMessage: {
        fontSize: 20,
        color: 'red'
    }
})

export default Stats