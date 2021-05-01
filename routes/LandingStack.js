import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"
import Landing from "../src/views/Landing"
import Dashboard from "../src/views/Dashboard"
import DrawerNavigator from "./DrawerNavigator"

const screens = {
    Login: {
        screen: Landing,
        navigationOptions: {
            headerShown: false,
          }
    },
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            headerShown: false,
          }
    },
    DrawerNavigator: {
        screen: DrawerNavigator,
        navigationOptions: {
            headerShown: false,
          }
    }
}

const LandingStack = createStackNavigator(screens);

export default createAppContainer(LandingStack);

// const Stack = createStackNavigator();

// const LandingStack = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Landing" component={Landing} />
//             <Stack.Screen name="Dashboard" component={Dashboard} />
//         </Stack.Navigator>
//     )
// }

// export default LandingStack;