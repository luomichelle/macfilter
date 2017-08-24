import React from 'react';
import Mac from './mac'

class Maclist extends React.Component{
	constructor(props){
		super(props);
	}
	rendertable(){
		return this.props.mactables.map((mactables) => {
			return <Mac
				key = {mactables.id}
				mactables = {mactables.macaddress}
			/>;
		});
	}
	render(){
		return(

				<div className="Maclist">
					{this.rendertable()}
				</div>

			)

	}
}





export default Maclist; 