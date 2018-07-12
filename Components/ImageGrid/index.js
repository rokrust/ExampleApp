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

    componentDidMount(){
        this.calculateImageDim();
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
        
        return(
            <FlatList 
                data={this.props.photos}
                renderItem={this._renderItem}
                numColumns={this.props.numColumns}
                keyExtractor={this._keyExtractor}
                onEndReached={this.props.onEndReached}
                onEndReachedThreshold={0.5}
                extraData={this.state}
            />
        )
    }
}
