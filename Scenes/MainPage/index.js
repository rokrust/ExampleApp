import React, { Component, PropTypes } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import FooterBar from '../../Components/FooterBar'
import { av2Theme } from '../../Themes'

const buttonColor = av2Theme.featherGray;
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
        callback: () => {
            console.log("Callback this: " + this);
            this.props.navigation.navigate("SlideShow", {});
        },
        color: buttonColor
    }
];

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        let dim = Dimensions.get('window')
        console.log("Rendering main page")
        return (
            <View style={{flex: 1}}>
                <FooterBar footerBarButtons={footerBarButtons} footerSize={{width: dim.width, height: 70}}/>
            </View>
        );
    }
}
