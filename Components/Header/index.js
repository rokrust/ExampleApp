import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

import {av2Theme} from '../../Themes'
import IconButton from '../IconButton'

export default class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <HeaderWrapper backgroundColor={av2Theme.featherGray}>
                <BackButtonWrapper>
                    <TouchableOpacity onPress={this.props.onPressLeft}>
                        <Text style={{color: av2Theme.black, fontSize:16}}>Go back</Text>
                    </TouchableOpacity>
                </BackButtonWrapper>
                <UploadButtonWrapper>
                    <TouchableOpacity onPress={this.props.onPressRight}>
                        <Text style={{color: av2Theme.black, fontSize:16}}>Upload images</Text>
                    </TouchableOpacity>
                </UploadButtonWrapper>
            </HeaderWrapper>
        );
    }  
};

const HeaderWrapper = styled.View`
    flex-direction: row;
    background-color: ${props => props.backgroundColor};
    height: 50;
`;

const UploadButtonWrapper = styled.View`
    position: absolute;
    right: 10;
    top: 14;
`;

const BackButtonWrapper = styled.View`
    position: absolute;
    left: 10;
    top: 14;
`;