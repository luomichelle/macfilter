import React from 'react';
import Mactaleview from './mactableview'


class Mac extends React.Component {

	constructor(props){
		super(props)
	}



	render() {

		return(
				<div>


					<Mactaleview macsampleData={this.props.macsampleData}/>
				</div>

			)


	}
}