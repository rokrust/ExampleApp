import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'

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
        iconName: "cast green",
        callback: () => this.props.navigation.navigate("SlideShow", {}),
        color: buttonColor
    }
];



export default class SlideShowScreen extends Component {
    static navigationOptions = {
        title: 'SlideShow',
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
