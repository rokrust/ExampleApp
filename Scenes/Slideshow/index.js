import React, { Component } from 'react'
import { View, Dimensions, Image } from 'react-native'
import Swiper from 'react-native-swiper'

import FooterBar from '../../Components/FooterBar'
import SlideShow from '../../Components/SlideShow'
/****************************
 *  TODO
 *      Fix rerendering issue
 * 
 *****************************/

const buttonColor = '#F8F8F8';

export default class SlideShowScreen extends Component {
    constructor(props){
        super(props);
    }

    footerBarButtons = [
        {   
            iconName: "castGreen",
            callback: () => console.log("cog"),
            color: buttonColor
        },
        {
            iconName: "mirror",
            callback: () => console.log("camera"),
            color: buttonColor
        },
        {
            iconName: "slideshow",
            callback: () => this.props.navigation.navigate("CameraRoll", {}),
            color: buttonColor
        }
    ];
    
    static navigationOptions = {
        title: 'SlideShow',
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <SlideShow images={this.props.navigation.getParam("slideShow")}/>            
            </View>
        );
    }
}
