import React, { Component } from 'react'

//Importar componentes hijos
import Message  from '../Message'

class MessagesList extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        {this.props.messages.map(msg => {
          return (
            <Message
              text={msg.text}
              picture={msg.picture}
              displayNamme={mag.displayNamme}
              username={msg.username}
              date={msg.date}
            />
          )
        })}
      </div>
    );
  }
}

export default MessagesList
