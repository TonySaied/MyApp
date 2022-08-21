import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class DisplayNum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  PlusPressed = () => {
    if (this.state.value >= 20) {
      alert("Can't be more than 20");
    } else {
      this.setState({
        value: this.state.value + 1,
      });
      console.log('Value: ' + (this.state.value + 1));
    }
  };

  MinusPressed = () => {
    if (this.state.value <= 0) {
      alert("Can't be less than 0");
    } else {
      this.setState({
        value: this.state.value - 1,
      });
    }
    console.log('Value: ' + (this.state.value - 1));
  };
  setZero = () => {
    if (this.state.value == 0) {
      alert('The value is already 0');
    } else {
      this.setState({
        value: 0,
      });
    }
    console.log('Reset Pressed');
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={style.container}>
          <TouchableOpacity onPress={this.MinusPressed} style={style.Minus}>
            <Text style={style.txt}>Minus</Text>
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 28}}>{this.state.value}</Text>
          </View>
          <TouchableOpacity onPress={this.PlusPressed} style={style.Plus}>
            <Text style={style.txt}>Plus</Text>
          </TouchableOpacity>
        </View>
        <View style={style.container}>
          <TouchableOpacity onPress={this.setZero} style={style.rstBtn}>
            <Text style={style.txt}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  Minus: {
    width: 100,
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  txt: {
    color: 'white',
    fontSize: 20,
  },
  Plus: {
    width: 100,
    height: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  rstBtn: {
    width: 100,
    height: 50,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 30,
  },
});
