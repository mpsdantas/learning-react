import React, { Component } from 'react';
import logo from './logo.svg';
import PlacarContainer from './PlacarContainer.js';


const dados = {
  partida:{
    estadio: "Maracanã/RJ",
    data: "11/02/2018",
    horario:"19h"
  },
  casa:{
    nome:"Vasco"
  },
  visitante:{
    nome:"Flamengo"
  }
}

class App extends Component {
  render() {
    return <PlacarContainer {...dados} clima={"oi"}/>;
  }
}
/*
...dados é equivalente a:

partida={dados.partida}
casa={dados.casa}
visitante={dados.visitante}
*/
export default App;
