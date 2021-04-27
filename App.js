import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import Landing from "./src/views/Landing"

const App = () => {

    return (
        <View style={styles.container}>
            <Landing />
        </View>
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

