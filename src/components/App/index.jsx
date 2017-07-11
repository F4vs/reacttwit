import React, { Component } from 'react'

//Importar componentes hijos del componente App
import Header from '../Header'
import Main from '../Main'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App
