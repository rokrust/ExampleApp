'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import styled from 'styled-components';

const icons = {
  hangup: require('./img/hangup.png'),
  camera: require('./img/camera.png'),
  mute: require('./img/mute.png'),
  unmute: require('./img/unmute.png'),
  delete: require('./img/delete.png'),
  settings: require('./img/settings.png'),
  edit: require('./img/edit.png'),
  cast: require('./img/cast.png'),
  mirror: require('./img/mirror.png'),
  slideshow: require('./img/slideshow.png')
};

export default class IconButton extends Component  {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    type: PropTypes.oneOf(Object.keys(icons)).isRequired,
    size: PropTypes.object,
    bgColor: PropTypes.string,
    accessibilityLabel: PropTypes.string,
    testID: PropTypes.string
  };

  static defaultProps = {
    size: {width: 53, height: 70},
    bgColor: 'white'
  };

  constructor(props) {
    super(props);

    this.state = {
      pressed: false
    };
  }

  render() {
    console.log("Iconbutton size: (" + this.props.size.width + ", " + this.props.size.height + ")")
    return (
      <Button
        size={this.props.size}
        accessibilityComponentType='button'
        accessibilityLabel={this.props.accessibilityLabel}
        accessibilityTraits={['button']}
        testID={this.props.testID}
        onPress={() => this._onPress()}
        navHeaderRight={this.props.navHeaderRight}
      >
        <Wrapper size={this.props.size} bgColor={this.props.bgColor}>
          <Image source={icons[this.props.type]} resizeMode='contain' />
        </Wrapper>
      </Button>
    );
  }

  _onPress() {
    if (this.state.pressed) return;

    this.setState({ pressed: true });
    this.props.onPress();

    setTimeout(() => this.setState({ pressed: false }), 200);
  }
}

const Button = styled.TouchableOpacity`
  width: ${props => props.size.width};
  height: ${props => props.size.height};
`;

const Wrapper = styled.View`
  background-color: ${props => props.bgColor};
  width: ${props => props.size.width};
  height: ${props => props.size.height};
  align-items: center;
  justify-content: center;
`;
