import React, { Component } from 'react'
import { TouchableOpacity, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import ImageBrowser from '../../Container/ImageBrowser'
import ClickableImage from '../ClickableImage'
import styled from 'styled-components'

//Props: 
//  - An array of objects containing
//      - image URI's
//  - An object with grid dimensions
//  - An object with grid size
export default class ImageGrid extends Component {
    static propTypes = {
        photos: PropTypes.array.isRequired,
        numColumns: PropTypes.number.isRequired,
        useSpacing: PropTypes.bool
    }
    
    spacing = 10;
    constructor(props){
        super(props)
    }

    state = {
        numColumns: 0,
        useSpacing: true,
        imageDim: 0,
    }

    calculateImageDim(props){
        this.state.imageDim = this.props.numColumns / this.props.gridSize.width;


        if(useSpacing) {
            this.state.imageDim -= spacing; //Crop image
        }
    }

    unrollPhotos() {
        return this.props.photos.map(image => {
            <ClickableImage 
                dim={{width: this.state.imageDim, height: this.state.imageDim}}
                uri={image.uri}
                onPress={this.onPress}
            />
        })
    }

    _onPress(){

    }

    _renderItem = ({image}) => {
        <ClickableImage 
            dim={{width: this.state.imageDim, height: this.state.imageDim}}
            uri={image.uri}
            onPress={this._onPress}
        />
    }

    render() {
        if (!this.props.useSpacing){
            this.spacing = 0;
        }
        console.log("Yolo")
        return(
            <FlatList 
                renderItem={this._renderItem}
                numColumns={this.props.numColumns}
            />
        )
    }
}

const Grid = styled.View`
    display: grid;
    grid-gap: ${props => props.spacing}
`;

const GridElementWrapper = styled.View`
    grid-row: ${props => props.row} / span 1;
    grid-column-start: ${props => props.col} / span 1;
`;