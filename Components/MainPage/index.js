import React, { Component, PropTypes } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import FooterBar from '../FooterBar'
import { DebugTextOutput } from '../../Debug'


const buttonColor = '#F8F8F8';
const footerBarButtons = [
    {   
        iconName: "cast",
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
        callback: () => console.log("navigate"),
        color: buttonColor
    }
];

export default class MainPage extends Component {

    render() {
        let dim = Dimensions.get('window')
        return (
            <View style={{flex: 1}}>
                <FooterBar footerBarButtons={footerBarButtons} footerSize={{width: dim.width, height: 70}}/>
            </View>
        );
    }
}
