import React, { Component, PropTypes } from 'react'
import { TouchableHighlight, View, Text, Image } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base'
import { DebugTextOutput } from '../../Debug'

export default class MainPage extends Component {

    render() {
        return (
            <Container>
                <Header />
                    <Text>
                        Welcome, my dude
                    </Text>
                <Content />
                    <FooterBar footerBarButtons={footerBarButtons}/>
                </Container>
        );
    }
}

//The lower footer bar of the main page for calling, uploading images etc..
export class FooterBar extends Component {
    constructor(props) {
        super(props);
        this.unrollFooterButtonObject = this.unrollFooterButtonObject.bind(this);
    }

    //Loop through footerButtons object and return a list of buttons
    unrollFooterButtonObject(footerBarButtons){
        return (
            footerBarButtons.map(button => 
            <FooterButton 
                key={button.id}
                iconName={button.iconName} 
                callback={button.callback}
            />)
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
            <Button onPress={this.props.callback}>
                <Icon iconName={this.props.iconName} />
            </Button>
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
        iconName: "cog",
        callback: () => console.log("cog")
    },
    {
        id: 1,
        iconName: "camera",
        callback: () => console.log("camera")
    },
    {
        id: 2,
        iconName: "navigate",
        callback: () => console.log("navigate")
    },
    {
        id: 3,
        iconName: "person",
        callback: () => console.log("person")
    }
];