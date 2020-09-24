const urbanOpenAPIurl = "https://api.urbandictionary.com/v0/define?term=";

exports.handler = (event, context, callback) => {
    /* Construct the fauna query */

    const data = JSON.parse(event.body);
    console.log(data);
    
    fetch(urbanOpenAPIurl + data.term).then(response => {
        return callback(null, {
            statusCode: 200,
            body: JSON.stringify(response)
        })
    }).catch(error => {
        return callback(null, {
            statusCode: 400,
            body: JSON.stringify(error)
        })
    });
}