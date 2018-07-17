import React, {Component} from 'react'
import {TouchableOpacity, Image} from 'react-native'
import PropTypes from 'prop-types'

export default class ClickableImage extends Component {
    static propTypes = {
        dim: PropTypes.object.isRequired,
        uri: PropTypes.string.isRequired,
        onPress: PropTypes.func
    }

    shouldComponentUpdate(nextProps, nextState){
        //let dim_neq =   this.props.dim.width !== nextProps.dim.width && 
        //                this.props.dim.height !== nextProps.dim.height;
        let uri_neq =   this.props.uri !== nextProps.uri

        return this.props.dim !== nextProps;
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