import React, { Component } from 'react';
import FormLogin from './components/FormLogin';
const parametrosForm = {
  tamanhoForm: "offset-md-3 col-md-6"
};
class App extends Component {
  render() {
    return (
      <FormLogin {...parametrosForm} />
    );
  }
}

export default App;
