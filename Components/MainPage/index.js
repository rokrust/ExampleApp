import React, { Component, PropTypes } from 'react'
import { TouchableHighlight, View, Text, Image } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base'

export default class MainPage extends Component {
    
}

//The lower footer bar of the main page for calling, uploading images etc..
export class FooterBar extends Component {
    constructor(props) {
        super(props);
    }

    

    //Renders all the buttons of the footer bar
    render() {
        
        //Loop through fosterBarButtons and render all components
        return(
            <Footer>
                <FooterTab>
                    {footerBarButtons.map(button =>
                        <FooterButton 
                            key={button.id}
                            imageSrc={button.imageSrc} 
                            callback={button.callback}
                        />
                    )}
                </FooterTab>
            </Footer>
        );
        
    }
};

//Generic button for the FooterBar
//Props:    imageSrc: Button image source
//          callback: Callback function
class FooterButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TouchableHighlight onPress={this.props.callback}>
                <Image
                    style={styles.button}
                    source={{uri: this.props.imageSrc}}
                />
            </TouchableHighlight>
        )
    }
};

const styles = {
    button : {

    }
}

const footerBarButtons = [
    {   
        id: 0,
        imageSrc: "./images/callingButton.png",
        callback: () => {}
    },
    {
        id: 1,
        imageSrc: "./images/slideShowButton.png",
        callback: () => {}
    },
    {
        id: 2,
        imageSrc: "./images/mirrorButton.png",
        callback: () => {}
    },
    {
        id: 3,
        imageSrc: "./images/optionsButton.png",
        callback: () => {}
    }
];