import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import DisplayNumTask1 from './DisplayNumTask1';

export default class MainTask1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      low: '',
      high: '',
      rand: '',
    };
  }
  generate = () => {
    if (this.state.low == '') {
      alert('Enter the Low Number');
    } else if (this.state.high == '') {
      alert('Enter the Low Number');
    } else if (this.state.low > this.state.high) {
      alert('Low Must be Less Than High');
    } else {
      let res =
        Math.floor(Math.random() * this.state.high + this.state.low) + 1;
      this.setState({rand: res});
    }
  };

  render() {
    return (
      <View style={style.container}>
        <DisplayNumTask1 num={this.state.rand} />
        <TextInput
          placeholder={'Low'}
          style={style.input}
          keyboardType="numeric"
          onChangeText={value => {
            this.setState({low: value});
          }}></TextInput>
        <TextInput
          placeholder={'High'}
          style={style.input}
          keyboardType="numeric"
          onChangeText={value => {
            this.setState({high: value});
          }}></TextInput>
        <Button
          title="Generate Random Number"
          color="red"
          onPress={this.generate}></Button>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'yellow',
    width: 100,
    height: 70,
    margin: 10,
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 28,
    paddingHorizontal: 20,
  },
});
