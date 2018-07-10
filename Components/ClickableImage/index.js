import React, {Component} from 'react'
import {TouchableOpacity, Image} from 'react-native'
import PropTypes from 'prop-types'

export default class ClickableImage extends Component {
    static propTypes = {
        dim: PropTypes.object.isRequired,
        uri: PropTypes.string.isRequired,
        onPress: PropTypes.func
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Image
                    style={this.props.dim} 
                    source={{uri: this.props.uri}} />
            </TouchableOpacity>
        );
    }
}