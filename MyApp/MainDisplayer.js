import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import DisplayNum from './DisplayNum';

export default class MainDisplayer extends Component {
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
    this.setState({
      val: 0,
    });
    console.log('Reset Pressed');
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 150,
          }}>
          <Text style={{fontSize: 48}}>Simple Counter</Text>
        </View>
        <DisplayNum newVal={this.state.value} />
        {/*<View style={style.container}>
          <TouchableOpacity onPress={this.setZero} style={style.rstBtn}>
            <Text style={style.txt}>Reset</Text>
    </TouchableOpacity>
    </View>*/}
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
  rstBtn: {
    width: 100,
    height: 50,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 30,
  },
  txt: {
    color: 'white',
    fontSize: 20,
  },
});
