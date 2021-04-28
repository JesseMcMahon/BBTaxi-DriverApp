import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import Landing from "./src/views/Landing"
import Navigator from "./routes/LandingStack"
// import {NavigationContainer} from "@react-navigation/native"
// import LandingStack from "./routes/LandingStack"

const App = () => {

    return (
        <Navigator />
        // <NavigationContainer>
        //     <LandingStack />
        // </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})

export default App;

