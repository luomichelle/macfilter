import React from 'react';
import Mactaleview from './mactableview'


class Mac extends React.Component {

	constructor(props){
		super(props)
	}



	render() {
		return(
			<Mactaleview 

			macaddress={this.props.macaddress} 

			content = {this.props.content}

			id = {this.props.id} 
			/>
		)
	}
}



export default Mac;