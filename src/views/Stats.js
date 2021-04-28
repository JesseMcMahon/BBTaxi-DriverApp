import React from "react"
import {View, Text, Button} from "react-native"


const Stats = () => {
    return (
        <View>
            <Text>THIS IS THE SKILLS PAGE</Text>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    )
}

export default Stats