import React, { Component } from 'react';
import './michelle.css';
import Maclists from './Maclists';
import AddMac from './addMac';

class Michelle extends Component{

  constructor(props) {
    super(props);
    this.state = { macaddress: ['11.11.11.11.11', '22.22.22.22.22', '33.33.33.33.33.33'] };
    this.linkMacaddress = this.linkMacaddress.bind(this);
  }
  renderMacaddress() {

    return this.state.macaddress.map(name => (
      <Maclists
        key={name}
        name={name}
      />
    ));
  }

  linkMacaddress(newName){
    this.setState({ 
      //remain this.state.greetings
      macaddress: [...this.state.macaddress, newName] 
    });
  }



	render() {
	  return (
	    <div className="michelle">
        <AddMac linkMacaddress={this.linkMacaddress}/>



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
            {this.renderMacaddress()}
	    		</tbody>
	    	</table>
	    </div>
	  );
	} 
}

 
export default Michelle;