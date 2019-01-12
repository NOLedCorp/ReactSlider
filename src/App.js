import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <h1>Hello world!</h1>
        <SayFullName name="Ivan" surname="Nomokonov" link="vk.com"/>
        <SayFullName name="Sergey" surname="Ivanov" link="instagram.com"/>
        <SayFullName name="Ivan" surname="Nomokonov" link="vk.com"/>
      </div>
    );
  }
}
function SayFullName(props){
  return (
    <div>
      <h1>Moe имя <b>{props.name}</b>, фамилия - <b>{props.surname}</b></h1>
      <a href={props.link}>Смотри!</a>
    </div>
  )
}

export default App;
