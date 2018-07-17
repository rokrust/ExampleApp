import React from 'react'
import { createStackNavigator, createTabNavigator } from 'react-navigation'
import HomeScreen from "../Scenes/MainPage"
import SlideShowScreen from "../Scenes/Slideshow"
import CameraRoll from "../Scenes/CameraRoll"
import CastScreen from "../Scenes/CastScreen"
import Header from "../Components/Header"
import {av2Theme} from "../Themes"

const MainNavigation = createStackNavigator({
    Home: HomeScreen,
    SlideShow: SlideShowScreen,
    Cast: CastScreen,
    CameraRoll: CameraRoll
}, {
    initialRouteName: 'Home', 
    navigationOptions: {
        headerStyle: {
            backgroundColor: av2Theme.white,
          },
          headerTintColor: av2Theme.black,
        },
    cardStyle: {
        backgroundColor: av2Theme.white,
    },
})

export default MainNavigation;