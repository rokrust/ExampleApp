import React, { Component, PropTypes } from 'react'

import { View, Text, Image } from 'react-native'
import { Footer, FooterTab, Button, Icon, StyleProvider } from 'native-base'
import { DebugTextOutput } from '../../Debug'
import { IconButton } from '../IconButton'

//The lower footer bar of the main page for calling, uploading images etc..
export default class FooterBar extends Component {
    constructor(props) {
        super(props);
        //this.unrollFooterButtonObject = this.unrollFooterButtonObject.bind(this);
    }

    //Loop through footerButtons object and return a list of buttons
    unrollFooterButtonObject(footerBarButtons){
        return (
            footerBarButtons.map(button => 
                <IconButton
                    key={button.id}
                    type={button.iconName} 
                    onPress={button.callback}
                    style={button.style}
                />
            )
        );
    }

    //Renders all the buttons of the footer bar
    render() {
        return(
            <Footer>
                <FooterTab>    
                    {this.unrollFooterButtonObject(this.props.footerBarButtons)}
                </FooterTab>
            </Footer>
        );
        
    }
};

//Generic button for the FooterBar
//Props:    iconName: Button image source
//          callback: Callback function
class FooterButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Button onPress={this.props.callback} style={this.props.style.button}>
                <Icon name={this.props.iconName} style={this.props.style.icon}/>
            </Button>
        )
    }
};
