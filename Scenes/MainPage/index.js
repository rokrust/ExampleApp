import React, { Component, PropTypes } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import FooterBar from '../../Components/FooterBar'
import { av2Theme } from '../../Themes'
import Header from '../../Components/Header'
import Swiper from 'react-native-swiper'

const buttonColor = av2Theme.featherGray;

export default class HomeScreen extends Component {
    static navigationOptions = {
        //title: 'Home',
        header: <Header />,
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
            callback: () => this.props.navigation.navigate("CameraRoll", {}),
            color: buttonColor
        }
    ];

    render() {
        let dim = Dimensions.get('window');

        return (
            <View style={{flex: 1}}>
                <FooterBar 
                    footerBarButtons={this.footerBarButtons} 
                    footerSize={{width: dim.width, height: 70}}
                />
            </View>
        );
    }
}
