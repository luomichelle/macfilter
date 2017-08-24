import React from 'react';

class Mactableview extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="Mactaleview">

				<h1>
					{this.props.id}
				</h1>
				
				<h2 className="Mactaleview_key">
					{this.props.macaddress} 
				</h2>
				<h3>

					{this.props.content}
				</h3>


			</div>
			)
	}
}


export default Mactableview; 