import React, { Component, PropTypes } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Container, Header, Content } from 'native-base'
import FooterBar from '../FooterBar'
import { DebugTextOutput } from '../../Debug'


const style = StyleSheet.create({
    button: {
        backgroundColor: '#F8F8F8',
    },
    icon: {
        color: '#626366',
    }
});

const footerBarButtons = [
    {   
        id: 0,
        iconName: "cog",
        callback: () => console.log("cog"),
        style: style
    },
    {
        id: 1,
        iconName: "camera",
        callback: () => console.log("camera"),
        style: style
    },
    {
        id: 2,
        iconName: "navigate",
        callback: () => console.log("navigate"),
        style: style
    },
    {
        id: 3,
        iconName: "person",
        callback: () => console.log("person"),
        style: style
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
