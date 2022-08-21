import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class DisplayNumTask1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          width: 400,
          height: 200,
          borderRadius: 50,
          backgroundColor: 'blue',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 70, textAlign: 'center'}}>
          {this.props.num}
        </Text>
      </View>
    );
  }
}
