import {createStackNavigator} from "react-navigation-stack"
import {createAppContainer} from "react-navigation"
import Landing from "../src/views/Landing"
import Dashboard from "../src/views/Dashboard"

const screens = {
    Login: {
        screen: Landing
    },
    Dashboard: {
        screen: Dashboard
    }
}

const LandingStack = createStackNavigator(screens);

export default createAppContainer(LandingStack);