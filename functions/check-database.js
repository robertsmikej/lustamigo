const faunadb = require("faunadb");
const q = faunadb.query;
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET
});

exports.handler = (event, context, callback) => {
    /* Construct the fauna query */

    const data = JSON.parse(event.body);
    // console.log(data);

    return client.query(
        q.Get(
            q.Ref(
                q.Collection('userdata'), data.uuid))).then((response) => {
                /* Success! return the response with statusCode 200 */
                // console.log('user data');
                // console.log(response);
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