import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import FooterBar from '../../Components/FooterBar'


const buttonColor = '#F8F8F8';
const footerBarButtons = [
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
        callback: () => console.log("slide show"),
        color: buttonColor
    }
];



export default class CastScreen extends Component {
    static navigationOptions = {
        title: 'Cast',
    };

    render() {
        let dim = Dimensions.get('window')
        return (
            <View style={{flex: 1}}>
                <FooterBar footerBarButtons={footerBarButtons} footerSize={{width: dim.width, height: 70}}/>
            </View>
        );
    }
}
