import { StackNavigator } from 'react-navigation'
import HomeScreen from "../Scenes/MainPage"
import SlideShowScreen from "../Scenes/Slideshow"
const MainNavigation = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
    /*Call: {
        screen: Call
    },
    CameraRoll: {

    },*/
    SlideShow : {
        screen: SlideShowScreen
    }
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