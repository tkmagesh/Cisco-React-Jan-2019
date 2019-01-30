import axios from 'axios';

const api_url = 'http://localhost:3030/bugs';

function getAll(){
	return axios
		.get(api_url)
		.then(response => response.data);
}

let bugApi = {
	getAll
}

export default bugApi;