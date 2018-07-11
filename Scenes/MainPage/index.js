import React, { Component, PropTypes } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import FooterBar from '../../Components/FooterBar'
import { av2Theme } from '../../Themes'
import ImageBrowser from '../../Container/ImageBrowser'
import ImageGrid from '../../Components/ImageGrid'


const buttonColor = av2Theme.featherGray;

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    }
    
    state={
        images: [{
            uri: "",
            dim: {
                width: 0,
                height: 0 
            }
        }],
        imageBrowser: new ImageBrowser
    }

    footerBarButtons = [
        {   
            iconName: "cast",
            callback: () => this.props.navigation.navigate("Cast", {}),
            color: buttonColor
        },
        {
            iconName: "mirror",
            callback: () => console.log(this.props),
            color: buttonColor
        },
        {
            iconName: "slideshow",
            callback: () => {},
            color: buttonColor
        }
    ];

    updateRenderedPhotos(photos) {
        let newState = {
            images: photos.map(photo => {
                return {
                    uri: photo.node.image.uri,
                    dim: {
                        width: photo.node.image.width,
                        height: photo.node.image.height
                    }
                }
            })
        }

        this.setState(newState);
    }

    getPhotos(nPhotos) {
        this.state.imageBrowser.getPhotos(nPhotos)
        .then((photos) => this.updateRenderedPhotos(photos))
        .catch(error => {console.log(error)});
    }

    componentDidMount(){
        this.getPhotos(100);
    }

    render() {
        let dim = Dimensions.get('window');

        return (
            <View style={{flex: 1}}>
                <ImageGrid photos={this.state.images} dim={dim.width} numColumns={3} />
                <FooterBar footerBarButtons={this.footerBarButtons} footerSize={{width: dim.width, height: 70}}/>
            </View>
        );
    }
}
