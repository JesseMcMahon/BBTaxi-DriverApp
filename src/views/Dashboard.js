import React from "react"
import {View, Text, StyleSheet} from "react-native"

const Dashboard = () => {
    return (
        <View style={styles.container}>
             <Text>Bradley Beach Taxi Driver Dashboard</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 150,
    }
})

export default Dashboard