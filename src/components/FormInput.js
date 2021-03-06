import React, {useState} from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native'

// class FormInputs extends Component {
//    state = {
//       email: '',
//       password: ''
//    }
//    handleEmail = (text) => {
//       this.setState({ email: text })
//    }
//    handlePassword = (text) => {
//       this.setState({ password: text })
//    }
//    login = (email, pass) => {
//       alert('email: ' + email + ' password: ' + pass)
//    }

const FormInputs = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginUser = (e) => {
        console.log(email, password)
        navigation.navigate()
    }
    

      return (
         <View style = {styles.container}>
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
         </View>
      )
}
export default FormInputs

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignSelf: 'stretch',
      alignItems: 'center'
   },
   input: {
      margin: 15,
      height: 40,
      width: 300,
      borderColor: '#71cdda',
      borderWidth: 1,
      borderRadius: 10,
      textAlign: 'center'
   }
})