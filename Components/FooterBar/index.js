import React, { Component, PropTypes } from 'react'
import { View, Dimensions } from 'react-native'
import styled from 'styled-components'

import IconButton from '../IconButton'

//The lower footer bar of the main page for calling, uploading images etc..
export default class FooterBar extends Component {
    constructor(props) {
        console.log("Constructing footerbar")
        super(props);
        this.props.footerBarButtons.forEach(
            (button, index) => {
                this.props.footerBarButtons[index].callback = 
                button.callback.bind(this)
            }
        )
        console.log("Footerbar constructed")
    }
   
    //Renders all the buttons of the footer bar
    render() {
        console.log("Rendering footerbar")
        let i = 0;
        
        //Buttons are of equal size
        let buttonSize = {
            width: this.props.footerSize.width / this.props.footerBarButtons.length,
            height: this.props.footerSize.height
        }
        
        return(
            //Moves footer to the bottom of the screen
            //Loop through footerButtons object and return a list of buttons
            <Footer size={this.props.footerSize}>{
                this.props.footerBarButtons.map(button => 
                    <IconButton
                        key={i++}
                        type={button.iconName} 
                        onPress={button.callback}
                        size={buttonSize}
                        bgColor={button.color}
                    />
                )
            }
            </Footer>
        );
    }
};

//flex-direction: row
const Footer = styled.View`
    width: ${props => props.size.width};
    height: ${props => props.size.height};
    flex: 1;
    flex-direction: row
    position: absolute;
    bottom: 0;
    left: 0;
`;