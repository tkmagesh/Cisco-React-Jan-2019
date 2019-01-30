
import bugApi from '../services/bugApi';

/*
function getBugs(){
	return [
		{id : 1, name : 'Server communication failure', isClosed : false, createdAt : Date()},
		{id : 2, name : 'User actions not recognized', isClosed : true, createdAt : Date()},
		{id : 3, name : 'Data integrity checks failed', isClosed : false, createdAt : Date()},
	]
}
*/

export function load(){
	return function(dispatch){
		bugApi
			.getAll()
			.then(bugs => {		
				let load_action = { type : 'LOAD', payload : bugs};
				dispatch(load_action);
			});
	}
}