import React, { Component } from 'react'

//Importacion de los componentes hijos
import MessagesList from '../MessagesList'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      messages: [
        {
          text: 'Mensaje del Tweet',
          picture: '',
          displayNamme: 'Felipe Valenzuela',
          username: 'favs92',
          date: Date.now()
        }
      ]
    }
  }

  render () {
    return (
      <MessagesList messages={this.state.messages} />
    );
  }
}

export default Main
