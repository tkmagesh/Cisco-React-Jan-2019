import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import Spinner from './Spinner';
import BugTracker from './BugTracker';
import appStore from './store';

ReactDOM.render(
	<Provider store={appStore}>
		<div>
			<Spinner/>
			<hr/>
			<BugTracker/>
		</div>
	</Provider>,
document.getElementById('root'));
