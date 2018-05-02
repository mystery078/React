import axios from 'axios';
import * as ConfigAPI from './../constants/Config';

export default function callApi(endpoint, method = 'GET', data){
	return 	axios({
	    		method: method,
	    		url: `${ConfigAPI.API_URL}/${endpoint}`,
	    		data: data
	    	}).catch(err => {
	    		console.log(err);
	    	});
}