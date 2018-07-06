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
            images: []
        };
    }

    //Get images from cameraRoll and rerender
    componentDidMount(){
        images = new ImageBrowser;
        images.getPhotos(10).then((photos) => {
            this.setState({images: {
                    uri: photos[0].node.image.uri,
                    dim: {
                        width: photos[0].node.image.width,
                        height: photos[0].node.image.height
                    }
                }
            });
        });
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
                    source={{uri: this.state.images.uri}}/>
                <FooterBar footerBarButtons={footerBarButtons} footerSize={{width: dim.width, height: 70}}/>
            </View>
        );
    }
}
