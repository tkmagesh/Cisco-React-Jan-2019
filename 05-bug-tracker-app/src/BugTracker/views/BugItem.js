import React, { Component } from 'react';

class BugItem extends Component{
	onBugNameClick = () => {
		this.props.toggle(this.props.bug);
	}
	render(){
		return(
			<li >
				<span className="bugname" onClick={this.onBugNameClick}>
					{JSON.stringify(this.props.bug)}
				</span>
			</li>
		)
	}
}
export default BugItem;