import React, { Component } from 'react';
import './michelle.css';
import Maclists from './Maclists'

class Michelle extends Component{

  constructor(props) {
    super(props);
    this.state = { greetings: ['Michelle', 'Simon', 'Roni'] };
  }
  renderGreetings() {
    return this.state.greetings.map(name => (
      <maclists
        key={name}
        name={name}
      />
    ));
  }

	render() {
	  return (
	    <div className="michelle">
	    	<button className="addNew">+ Add New MAC Filter</button>
	    	<table className="flex-container">
	    		<tbody>
		    		<tr>
		    			<th>location</th>
		    			<th>IP</th>
		    			<th>MAC Address</th>
		    			<th>Clients Block</th>
		    		</tr>
		    		<tr>
		    			<th>Huntington Beach</th>
		    			<th>192.168.1.240</th>
		    			<th>11.11.11.11.11</th>
		    			<th>2</th>
		    		</tr>
		    		<tr className="label">
		    			<th>Client Name</th>
		    			<th>MAC Address</th>
		    			<th>BAND</th>
		    			<th>Edit</th>
		    			<th>All</th>
		    		</tr>

            <Maclists />
	    		</tbody>
	    	</table>
	    </div>
	  );
	} 
}

 
export default Michelle;