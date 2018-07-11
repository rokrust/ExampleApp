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
        useSpacing: true,
        imageDim: 0,
    }

    calculateImageDim(){
        this.state.imageDim = this.props.dim / this.props.numColumns;

        if(this.props.useSpacing) {
            this.state.imageDim -= spacing; //Crop image
        }
    }

    _keyExtractor= (item, index) => item.uri;

    _renderItem = image => {
        return <ClickableImage 
            dim={{width: this.state.imageDim, height: this.state.imageDim}}
            uri={image.item.uri}
            onPress={this._onPress}
        />
    }

    render() {
        if (!this.props.useSpacing){
            this.spacing = 0;
        }
        this.calculateImageDim();
        
        return(
            <FlatList 
                data={this.props.photos}
                renderItem={this._renderItem}
                numColumns={this.props.numColumns}
                keyExtractor={this._keyExtractor}
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