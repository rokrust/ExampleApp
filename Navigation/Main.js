import { createStackNavigator } from 'react-navigation'
import HomeScreen from "../Scenes/MainPage"
import SlideShowScreen from "../Scenes/Slideshow"
const MainNavigation = createStackNavigator({
    Home: HomeScreen,
    SlideShow: SlideShowScreen
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