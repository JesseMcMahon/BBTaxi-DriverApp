import React from "react"
import {View, Text, StyleSheet} from "react-native"
import FormInputs from "../components/FormInput"

const Landing = () => {
    return (
        <View style={styles.container}>
             <Text style={styles.header}>Bradley Beach Taxi </Text>
             <Text style={styles.italicFont}>Driver </Text>
            <FormInputs />
            <Text style={styles.copy}>&copy; Bradley Beach Taxi 2021</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 150,
    },
    header: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: '100'
       },   
       
       italicFont: {
           fontStyle: 'italic',
           textAlign: 'right',
           paddingRight: 7,
           fontSize: 30,
           color: '#71cdda',
           marginTop: 10,
           marginBottom: 70
       },
    copy: {
        textAlign: 'center',
        color: '#ccc',
        marginBottom: 15
    }
})

export default Landing