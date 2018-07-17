import React, {Component} from 'react'
import {View, Text, Image, Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'


const renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={{ color: 'grey' }}>
          <Text style={styles.paginationText}>{index + 1}</Text>/{total}
        </Text>
      </View>
    )
}

const swiperStyle = {
    paginationStyle: {
        position: 'absolute',
            top: 20,
            right: 20
    }   
}

export default class SlideShow extends Component {
    constructor(props){
        super(props)
    }


    unrollImageUris(){
        let dim = Dimensions.get('window');
        return this.props.images.map((image) => {
            return(
                <Image key={image} source={{uri: image}} style={{width: dim.width, height: dim.height}}/>
            )
        })
    }

    render(){
        return(
            <Swiper loop={true}>
                {this.unrollImageUris()}
            </Swiper>
        )
    }
};