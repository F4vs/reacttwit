import React, { Component } from 'react'


//Importacion de estilos css
import style from './header.css'

class Header extends Component {
  render () {
    return (
      <header className={style.root}>
        <h1 className={style.logo}>REACTTWIT</h1>
      </header>
    );
  }
}

export default Header
