const faunadb = require("faunadb");
const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET
});

exports.handler = (event, context, callback) => {
    /* Construct the fauna query */
    const userData = JSON.parse(event.body);
    return client.query(
        q.Create(
            q.Ref(
                q.Collection('userdata'), userData.uuid), {data: JSON.parse(event.body)})).then((response) => {
                /* Success! return the response with statusCode 200 */
                console.log(response);
                return callback(null, {
                    statusCode: 200,
                    body: JSON.stringify(response)
                })
    }).catch((error) => {
        /* Error! return the error with statusCode 400 */
        return callback(null, {
            statusCode: 400,
            body: JSON.stringify(error)
        })
    })
}