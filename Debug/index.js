import React, { Component, PropTypes } from 'react'
import { Text, View } from 'react-native'


export class DebugTextOutput extends Component {
    constructor(props){
        super(props);
        this.state = {
            outputText: ""
        }

        this.output = this.output.bind(this);
    }

    output(text){
        this.setState({outputText: text});
    }


    render() {
        return(
            <Text>
                {this.state.outputText}
            </Text>
        );
    }
}