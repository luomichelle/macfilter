import React from 'react';


class Mactableview extends React.Component {
	constructor(props){
		super(props);
	}

	rendertable(){
		return this.props.macsampleData.map((macsampleData) => {
			return <views
				key = {macsampleData.id}
				macsampleData = {macsampleData.macaddress}

			/>;

		});


	}



	render(){

		return(

				<div className="view">
					{this.rendertable()}

				</div>

			)
	}


}


export default Mactableview; 