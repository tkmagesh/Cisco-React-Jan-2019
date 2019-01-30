import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

let spinnerActionCreators = {
	up(delta = 1){
		let up_action = { type : 'UP', payload : delta };
		return up_action;
	},
	down(delta = 1){
		let down_action = { type : 'DOWN', payload : delta };
		return down_action;
	},
	doubleUp(){
		let doubleUp_action = { type : 'DOUBLE_UP'};
		return doubleUp_action;
	},
	doubleDown(){
		let doubleDown_action = { type : 'DOUBLE_DOWN'};
		return doubleDown_action;
	}
};

class Spinner extends Component{
	txtDeltaRef = React.createRef();

	onDownClick = () => {
		this.props.down(this.txtDeltaRef.current.valueAsNumber || 1);
	}
	onUpClick = () => {
		this.props.up(this.txtDeltaRef.current.valueAsNumber || 1);
	}
	onDoubleUpClick = ()=> {
		this.props.doubleUp();
	}
	onDoubleDownClick = ()=> {
		this.props.doubleDown();
	}
	render(){
		let value = this.props.spinnerValue;
		return(
			<div>
				<label>Delta :</label>
				<input type="number" ref={this.txtDeltaRef}/>
				<br/>
				<input type="button" value="DOUBLE DOWN" onClick={this.onDoubleDownClick} />
				<input type="button" value="DOWN" onClick={this.onDownClick}/>
				<span> [ {value} ] </span>
				<input type="button" value="UP" onClick={this.onUpClick}/>
				<input type="button" value="DOUBLE UP" onClick={this.onDoubleUpClick} />
			</div>
		)
	}
}

function mapStateToSpinnerProps(storeState){
	let spinnerValue = storeState.spinnerData;
	return { spinnerValue : spinnerValue };
}

function mapDispatchToSpinnerProps(dispatch){
	var spinnerActions = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActions;		
}

export default connect(
		mapStateToSpinnerProps,
		mapDispatchToSpinnerProps
	)(Spinner);