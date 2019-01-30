import React, { Component } from 'react';
import BugItem from './BugItem';

class BugList extends Component{
	onRemoveClosedClick = () => {
		this.props.removeClosed(this.props.bugs);
	}
	render(){
		let { bugs, toggle, removeClosed } = this.props;
		let bugItems = bugs.map((bug, index) => (
			<BugItem key={index} bug={bug} toggle={toggle}/>
		))
		return(
			<section className="list">
				<ol>
					{bugItems}
				</ol>
				<input type="button" value="Remove Closed" onClick={this.onRemoveClosedClick}/>
			</section>
		);
	}
}
export default BugList;