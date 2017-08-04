import React, { Component } from 'react';


class AddMac extends Component {
	constructor(props){
		super(props);
		this.state = {newMacname:''};
		this.handleUpdate = this.handleUpdate.bind(this);
		this.linkMacaddress = this.linkMacaddress.bind(this);
	}
	handleUpdate(event) {
	  	//change value:
	    this.setState({ newMacname: event.target.value });
	}
	linkMacaddress(){
		//passing value that when user click
		this.props.linkMacaddress(this.state.newMacname);
		//clear input state:
		this.setState({newMacname:''});
	} 

   render() {
	  return (
	    <div className="AddGreeter">
	      <input
	        type="text"
	        onChange={this.handleUpdate}
	        value={this.state.newMacname}
	      />
	      &nbsp;&nbsp;
	      <button onClick={this.linkMacaddress}>Add</button>
	    </div>
	  );
	}
}


export default AddMac;