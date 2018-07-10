import React, { Component } from 'react'
import { View, Dimensions, Image } from 'react-native'
import FooterBar from '../../Components/FooterBar'
import ImageBrowser from '../../Container/ImageBrowser/'

const buttonColor = '#F8F8F8';
const footerBarButtons = [
    {   
        iconName: "castGreen",
        callback: () => console.log("cog"),
        color: buttonColor
    },
    {
        iconName: "mirror",
        callback: () => console.log("camera"),
        color: buttonColor
    },
    {
        iconName: "slideshow",
        callback: () => console.log("slide show"),
        color: buttonColor
    }
];



export default class CastScreen extends Component {
    constructor(props){
        super(props);

        this.state={
            images: [{uri: ""}],
            imageBrowser: new ImageBrowser
        };
    }

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

    //Get images from cameraRoll and rerender
    componentDidMount(){
        this.state.imageBrowser.getPhotos(10)
        .then((photos) => {
            console.log("Getting images")
            console.log(photos)
            this.updateRenderedPhotos(photos)
        })
        .catch(error => console.log(error));
    }

    static navigationOptions = {
        title: 'Cast',
    };

    render() {
        let dim = Dimensions.get('window')
        return (
            <View style={{flex: 1}}>
                <Image
                    style={{width: dim.width, height: dim.height}} 
                    source={{uri: this.state.images[0].uri}}/>
                <FooterBar footerBarButtons={footerBarButtons} footerSize={{width: dim.width, height: 70}}/>
            </View>
        );
    }
}
