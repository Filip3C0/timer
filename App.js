import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      botao: 'START',
      tempo: null,
    };
    //Variavel do timer do relogio
    this.timer = null;
    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);
  }

  start() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ botao: 'START' });

    } 
    else {
      this.setState({ botao: 'STOP' });
      this.timer = setInterval(() => {
        this.setState({ timer: this.state.timer + 0.1});
      }, 100);
    }
  }

  clear() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      timer: 0,
      botao: 'START',
      tempo: this.state.timer,
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/cronometro.png')} style={styles.img} />
        <Text style={styles.cronometro}>{this.state.timer.toFixed(1)}</Text>

        {/*  view com os Botões de start e stop*/}
        <View style={styles.area}>
          {/*Botão start*/}
          <TouchableOpacity style={styles.btnTimer} onPress={this.start}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          {/*Botão stop*/}
          <TouchableOpacity style={styles.btnTimer} onPress={this.clear}>
            <Text style={styles.btnTexto}>CLEAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.last}>
          <Text style={styles.textLast}>
            {this.state.tempo > 0
              ? 'Last Time: ' + this.state.tempo.toFixed(2) + ' ' + 'S'
              : ' '}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 300,
  },
  cronometro: {
    marginTop: -160,
    color: '#dd7b22',
    fontSize: 65,
    fontWeight: 'bold',
  },
  area: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40,
  },
  btnTimer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 100,
    margin: 20,
    backgroundColor: '#dd7b22',
    borderRadius: 9,
  },
  btnTexto: {
    color: '#222',
    fontStyle: 'italic',
    fontWeight: ' bold',
    fontSize: 20,
  },
  last: {
    marginTop: 40,
  },
  textLast: {
    color: '#dd7b22',
    fontStyle: 'italic',
    fontWeight: ' bold',
    fontSize: 20,
  },
});
