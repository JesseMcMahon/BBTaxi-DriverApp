import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "../src/views/Dashboard";
import Stats from "../src/views/Stats"
import Landing from "../src/views/Landing"
import { NavigationContainer } from "@react-navigation/native";
import {StyleSheet} from "react-native"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
      <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Dashboard"
             >
                <Drawer.Screen name="Dashboard" component={Dashboard} />
                <Drawer.Screen name="Stats" component={Stats} />

                {/* //Used to logout the user. So maybe onPress remove token??? */}
                <Drawer.Screen label name="Logout" component={Landing} />

            </Drawer.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    navFontColor: {
        color: '#71cdda'
    }
})
export default DrawerNavigator;