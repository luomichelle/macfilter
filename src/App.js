import React, { Component } from 'react';
import './App.css';
// import Mac from './Mac';
import Maclist from './maclist';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      mactables: [],
      search: "",
      selectedMacAddress: 0,
      isSelected: false,

    }
  }
  componentWillMount(){
    this.setState({
      mactables:this.props.mactables
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header"> 
          <h2>MAC FLITER</h2>
        </div>
        <p className="App-intro">
        </p>
        <Maclist

        />
      </div>
    );
  }
}

export default App;
