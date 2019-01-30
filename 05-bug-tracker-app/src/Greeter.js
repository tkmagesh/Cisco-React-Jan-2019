import React, { Component } from 'react';

class Greeter extends Component{

	txtUserNameRef = React.createRef();

	state = { 
		greetMsg : '[Default greet message!]'
	};

	onGreetClick = () => {
		//let userName = prompt('Enter the user name :');
		let userName = this.txtUserNameRef.current.value;
		let msg = `Hi ${userName}, Have a nice day!`;
		this.setState({ greetMsg : msg});
	}

	//presentation
	render(){
		
		return (
			<div>
				<h1>Greeter</h1>
				<hr/>
				<label>User Name :</label>
				<input type="text" ref={this.txtUserNameRef} />
				<input type="button" value="Greet" onClick={this.onGreetClick}/>
				<div>{this.state.greetMsg}</div>
			</div>
		);
	}
}

export default Greeter;