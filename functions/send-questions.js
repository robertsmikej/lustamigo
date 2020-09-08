const faunadb = require("faunadb");
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
});

exports.handler = (event, context, callback) => {
  const userData = JSON.parse(event.body);
  return client.query(
    q.Update(
        q.Ref(q.Collection('userdata'), userData.uuid), {data: JSON.parse(event.body)})).then((response) => {
            return callback(null, {
                statusCode: 200,
                    body: JSON.stringify(response)
                })
        }).catch((error) => {
            return callback(null, {
                statusCode: 400,
                body: JSON.stringify(error)
            })
        })
};