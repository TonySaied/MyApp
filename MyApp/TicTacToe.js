import React, {Component, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  Button,
} from 'react-native';

export default class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      currentPlayer: 1,
    };
  }

  //1: player 1 won, -1:player 2 won, 0:draw
  getWinner = () => {
    const NUM_TILES = 3;
    var arr = this.state.gameState;
    var sum;
    //check rows
    for (var i = 0; i < NUM_TILES; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum == 3) {
        return 1;
      } else if (sum == -3) {
        return -1;
      }
    }
    //check columns
    for (var i = 0; i < NUM_TILES; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum == 3) {
        return 1;
      } else if (sum == -3) {
        return -1;
      }
    }
    //check diagonals
    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum == 3) {
      return 1;
    } else if (sum == 3) {
      return -1;
    }

    sum = arr[2][0] + arr[1][1] + arr[0][2];
    if (sum == 3) {
      return 1;
    } else if (sum == 3) {
      return -1;
    }
    //draw
    return 0;
  };
  onTilePress = (row, col) => {
    //stop tiles from change
    var value = this.state.gameState[row][col];
    if (value !== 0) {
      return;
    }
    //current player
    var currentPlayer = this.state.currentPlayer;
    //set tile
    var arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({gameState: arr});
    //switch player
    var nextPlayer = currentPlayer == 1 ? -1 : 1;
    this.setState({currentPlayer: nextPlayer});
    //check winner
    var winner = this.getWinner();
    if (winner == 1) {
      Alert.alert('Winner is X');
      this.initializeGame();
    } else if (winner == -1) {
      Alert.alert('Winner is O');
      this.initializeGame();
    }
  };
  onNewGame = () => {
    this.initializeGame();
  };
  componentDidMount() {
    this.initializeGame();
  }
  initializeGame = () => {
    this.setState({
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      currentPlayer: 1,
    });
  };
  renderIcon = (row, col) => {
    var value = this.state.gameState[row][col];
    switch (value) {
      case 1:
        return <Image source={require('./x.png')} style={style.tileX} />;
      case -1:
        return <Image source={require('./o.png')} style={style.tileO} />;
      default:
        return <View />;
    }
  };
  render() {
    return (
      <View style={style.container}>
        {/**Top */}
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => this.onTilePress(0, 0)}
            style={[style.tile, {borderLeftWidth: 0, borderTopWidth: 0}]}>
            {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTilePress(0, 1)}
            style={[style.tile, {borderTopWidth: 0}]}>
            {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTilePress(0, 2)}
            style={[style.tile, {borderTopWidth: 0, borderRightWidth: 0}]}>
            {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>

        {/**Middle */}
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => this.onTilePress(1, 0)}
            style={[style.tile, {borderLeftWidth: 0}]}>
            {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTilePress(1, 1)}
            style={[style.tile, {}]}>
            {this.renderIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTilePress(1, 2)}
            style={[style.tile, {borderRightWidth: 0}]}>
            {this.renderIcon(1, 2)}
          </TouchableOpacity>
        </View>

        {/**Bottom */}
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => this.onTilePress(2, 0)}
            style={[style.tile, {borderBottomWidth: 0, borderLeftWidth: 0}]}>
            {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTilePress(2, 1)}
            style={[style.tile, {borderBottomWidth: 0}]}>
            {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTilePress(2, 2)}
            style={[style.tile, {borderBottomWidth: 0, borderRightWidth: 0}]}>
            {this.renderIcon(2, 2)}
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 50}} />
        <Button title="New Game" onPress={this.onNewGame} />
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tile: {
    borderWidth: 10,
    width: 100,
    height: 100,
  },
  tileX: {
    color: 'red',
    width: 100,
    height: 100,
  },
  tileO: {
    color: 'green',
    width: 100,
    height: 100,
  },
});
