import React from "react"
import {View, Text, Button, StyleSheet} from "react-native"

const Dashboard = ({navigation}) => {

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