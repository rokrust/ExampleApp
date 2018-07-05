import React, { Component, PropTypes } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import FooterBar from '../../Components/FooterBar'
import { av2Theme } from '../../Themes'

const buttonColor = av2Theme.featherGray;

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    }
    
    footerBarButtons = [
        {   
            iconName: "cast",
            callback: () => this.props.navigation.navigate("Cast", {}),
            color: buttonColor
        },
        {
            iconName: "mirror",
            callback: () => console.log(this.props),
            color: buttonColor
        },
        {
            iconName: "slideshow",
            callback: () => {},
            color: buttonColor
        }
    ];

    render() {
        let dim = Dimensions.get('window')
        console.log("Rendering main page")
        return (
            <View style={{flex: 1}}>
                <FooterBar footerBarButtons={this.footerBarButtons} footerSize={{width: dim.width, height: 70}}/>
            </View>
        );
    }
}
