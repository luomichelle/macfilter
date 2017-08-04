import React, { Component } from 'react';


class Maclists extends Component {
  constructor(props){
  super(props);
  this.state = { name: 'MAC' };
  }


  render() {
    return (
            <tr className="label gray">
              <th>Michelle</th>
              <th>{this.state.name}:{this.props.name}</th>
              <th>2.5 / 5 </th>
              <th>Change</th>
              <th>Delete</th>
            </tr>
    );
  }




}

export default Maclists;
