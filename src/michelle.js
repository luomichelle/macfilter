import React, { Component } from 'react';
import './michelle.css';

class Michelle extends Component{

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
		    		<tr className="label gray">
		    			<th>Michelle</th>
		    			<th>6c:72:e7:22:e8:6e</th>
		    			<th>2.5 / 5 </th>
		    			<th>Change</th>
		    			<th>Delete</th>
		    		</tr>
	    		</tbody>
	    	</table>
	    </div>
	  );
	} 
}

 
export default Michelle;