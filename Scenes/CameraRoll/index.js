import React, { Component, PropTypes } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import throttle from 'lodash.throttle'

import FooterBar from '../../Components/FooterBar'
import { av2Theme } from '../../Themes'
import ImageBrowser from '../../Container/ImageBrowser'
import ImageGrid from '../../Components/ImageGrid'
import Header from '../../Components/Header'

const buttonColor = av2Theme.featherGray;

export default class CameraRoll extends Component {    
    static navigationOptions = ({ navigation }) => {
        const onPressLeft = navigation.getParam('onPressLeft')
        const onPressRight = navigation.getParam('onPressRight')
        
        return {
            title: 'CameraRoll',
            header: <Header 
                        onPressLeft={() => onPressLeft()} 
                        onPressRight={() => onPressRight()}
                    />,
        };
    }
    
    constructor(props){
        super(props);
        this.state={
            images: [],
            imageBrowser: new ImageBrowser,
            slideShow: []
        }
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
        //Extract useful information from the photos array
        let newImages = photos.map(photo => {
            return {
                uri: photo.node.image.uri,
                dim: {
                    width: photo.node.image.width,
                    height: photo.node.image.height
                }
            }
        })

        //Append the new images to the images stored in state
        this.setState({images: this.state.images.concat(newImages)});
    }

    getPhotos= throttle((nPhotos) => {
        this.state.imageBrowser.getPhotos(nPhotos)
        .then((photos) => {
            this.updateRenderedPhotos(photos); 
        })
        .catch(error => {console.log(error)});
    }, 300,  { leading: true, trailing: false })

    uploadSlideShow = () => {
        this.props.navigation.navigate("SlideShow", {slideShow: this.state.slideShow})
    }

    componentDidMount(){
        this.props.navigation.setParams({onPressRight: () => this.uploadSlideShow()})
        this.getPhotos(100);
    }

    onImagePressed = uri => {
        this.setState(prevState => {
            {
                slideshow: prevState.slideShow.push(uri)
            }
        })
    }

    render() {
        let dim = Dimensions.get('window');

        return (
            <View style={{flex: 1}}>
                <ImageGrid 
                    photos={this.state.images} 
                    dim={dim.width} 
                    numColumns={3} 
                    onEndReached={() => this.getPhotos(50)}
                    onPress={this.onImagePressed}
                />
                <FooterBar 
                    footerBarButtons={this.footerBarButtons} 
                    footerSize={{width: dim.width, height: 70}}
                />
            </View>
        );
    }
}
