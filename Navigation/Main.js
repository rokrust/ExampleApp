import { createStackNavigator, createTabNavigator } from 'react-navigation'
import HomeScreen from "../Scenes/MainPage"
import CastScreen from "../Scenes/Slideshow"
const MainNavigation = createTabNavigator({
    Home: HomeScreen,
    Cast: CastScreen
    /*Call: {
        screen: Call
    },
    CameraRoll: {

    },*/
}, {
    initialRouteName: 'Home', 
    navigationOptions: {
        headerStyle: {
            backgroundColor: "white", //theme.white,
          },
          headerTintColor: "black",//theme.black,
        },
    cardStyle: {
        backgroundColor: "white",//theme.white,
    },
})

export default MainNavigation;