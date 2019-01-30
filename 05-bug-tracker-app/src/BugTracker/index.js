import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as bugActionCreators from './actions'

import BugStats from './views/BugStats';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';

class BugTracker extends Component{
	render(){
		let { bugs, toggle, addNew, removeClosed,load } = this.props;
		return(
			<>
				<input type="button" value="Load" onClick={load} />
				<div>
					<BugStats bugs={bugs} />
					<BugSort />
					<BugEdit addNew={addNew} />
					<BugList {...{bugs, toggle, removeClosed}} />
				</div>
			</>
		)
	}
}

//state extraction
function mapStateToBugTrackerProps(storeState){
	let bugs = storeState.bugsData;
	return { bugs : bugs };
}

//binding actions
function mapDispatchToBugTrackerProps(dispatch){
	let bugActions = bindActionCreators(bugActionCreators, dispatch);
	return bugActions;
}

export default connect(
	mapStateToBugTrackerProps,
	mapDispatchToBugTrackerProps
)(BugTracker);
