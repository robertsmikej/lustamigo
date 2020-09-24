const axios = require('axios');
const urbanOpenAPIurl = "https://api.urbandictionary.com/v0/define?term=";

exports.handler = (event, context, callback) => {
    const data = JSON.parse(event.body);
    axios({
		method:'get', 
		url: urbanOpenAPIurl + data.term
	}).then(res => {
		callback(null, {
			statusCode: 200,
			body: JSON.stringify(res.data)
		});
	}).catch(err => {
		callback(err);
	});
}