import React, { Component } from 'react';


class Maclists extends Component {
  constructor(props){
  super(props);
  this.state = { greeting: 'Whatupppp' };
  this.state = { greetings: ['Michelle', 'Simon', 'Roni'] };
  }


  renderGreetings() {
    return this.state.greetings.map(name => (
      <Maclists
        key={name}
        name={name}
      />
    ));
  }

  render() {
    return (
            <tr className="label gray">
              <th>Michelle</th>
              <th>{this.renderGreetings()}</th>
              <th>2.5 / 5 </th>
              <th>Change</th>
              <th>Delete</th>
            </tr>
    );
  }




}

export default Maclists;
