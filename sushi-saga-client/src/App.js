import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
//SUSHI CONTAINER AND TABLE ARE CHILD TO APP
//SUSHI Container is parent to SUSHI and MOREButton
//GET Sushi List from Server
//ONly 4 sushi are displayed at a time
//Clicking "More Sushi" shows next 4 Sushi in list 
//Clicking Sushi on a plate Eats the Sushi, it will be removed after eating the sushi
      //an empty plate will appear on the sushi that was eaten
//Have a state that is Money
//When the Sushi is eaten charge customer for Sushi *In TABLE Component*
//When the money is Done no more sushi can be eaten
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sushi: [], 
      money: 150
    }

  }

  componentDidMount() {
    fetch('http://localhost:3000/sushis')
  .then((response) => {
    return response.json();
  })
  .then((myJson)=> {
    this.setState({
      sushi: myJson
    })
  });
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi}  />
        <Table money={this.state.money}/>
      </div>
    );
  }
}
export default App;