import React, { Component, PropTypes } from 'react'
import { View, Text, Image } from 'react-native'
import { Container, Header, Content } from 'native-base'
import FooterBar from '../FooterBar'
import { DebugTextOutput } from '../../Debug'


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
