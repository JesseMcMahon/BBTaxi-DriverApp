import React, {useState} from "react"
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button} from "react-native"
import FormInputs from "../components/FormInput"

const Landing = ({navigation}) => {

    const [email, setEmail] = useState('hello');
    const [password, setPassword] = useState();
    

    const loginUser = (e) => {
        if(email === 'jesse' && password === 'test') {
            navigation.navigate('DrawerNavigator')
        } else {
            console.log("EH EH WRONG!")
        }
    }
    return (
        <View style={styles.container}>
             <Text style={styles.header}>Bradley Beach Taxi </Text>
             <Text style={styles.italicFont}>Driver </Text>
            
             <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
              onChangeText={(e) => setEmail(e)}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               secureTextEntry={true}
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText={(e) => setPassword(e)}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress={loginUser}
               >
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>

            <Text style={styles.copy}>&copy; Bradley Beach Taxi 2021</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: 'stretch',
      alignItems: 'center',
      marginTop: 150
    },
    header: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: '100'
       },   
       
    italicFont: {
           fontStyle: 'italic',
           textAlign: 'right',
           paddingLeft: 280,
           fontSize: 30,
           color: '#71cdda',
           marginTop: 10,
           marginBottom: 70
       },
       input: {
        margin: 15,
        height: 40,
        width: 300,
        borderColor: '#71cdda',
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center'
     },
    submitButton: {
        backgroundColor: '#71cdda',
        padding: 10,
        margin: 15,
        height: 40,
        width: 300,
        borderRadius: 10
     },
     submitButtonText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
     },
    copy: {
        textAlign: 'center',
        color: '#ccc',
        marginBottom: 15
    }
})

export default Landing