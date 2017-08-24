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

    };
  }
  componentWillMount() {
    this.setState({
      mactables:this.props.mactables
    });
  }
  filterMacs() {
    return this.state.mactables.filter((mactables) => {
      let value = this.state.search.replace(/\\/g, '\\\\');
      return mactables.title.search(value) !== -1 || mactables.content.search(value) !== -1;
    });
  }

  render() {

    let mactables = this.state.search.length ? this.filterMacs() : this.state.mactables;
    return (
      <div className="App">
        <div className="App-header"> 
          <h2>MAC FLITER</h2>
        </div>
        <p className="App-intro">
        </p>
        <Maclist
          mactables={mactables}
        />
      </div>
    );
  }
}

export default App;
