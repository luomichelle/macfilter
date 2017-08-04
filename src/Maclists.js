import React, { Component } from 'react';


class Maclists extends Component {
  constructor(props){
  super(props);
  this.state = { name: 'MAC' };
  this.removeMacaddress = this.removeMacaddress.bind(this);
  }

  removeMacaddress() {
    this.props.removeMacaddress(this.props.name);
  }

  render() {
    return (
            <tr className="label gray">
              <th>Michelle</th>
              <th>{this.state.name}:{this.props.name}</th>
              <th>2.5 / 5 </th>
              <th>Change</th>
              <th>
              <button onClick={this.removeMacaddress}>Delete</button>
              </th>
            </tr>
    );
  }




}

export default Maclists;
