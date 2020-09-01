const postmark = require("postmark"); // require mail service, postmark in this case
const client = new postmark.Client("196074f2-f17a-491d-b568-5f21e898d0aa"); // your postmark api key
const headers = {
    "Access-Control-Allow-Origin": "*", // better change this for production
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type"
};

exports.handler = function (event, context, callback) {

    console.log(context);
    console.log(payload);
    // only allow POST requests
    if (event.httpMethod !== "POST") {
        return callback(null, {
            statusCode: 410,
            body: JSON.stringify({
                message: 'Only POST requests allowed.',
            }),
        });
    }

    // parse the body to JSON so we can use it in JS
    const payload = JSON.parse(event.body);

    // validate the form
    if (
        !payload.name ||
        !payload.subject ||
        !payload.email ||
        !payload.message
    ) {
        return callback(null, {
            statusCode: 422,
            headers,
            body: JSON.stringify({
                message: 'Required information is missing.',
            }),
        });
    }

    // finally everything is fine and we can send the mail
    console.log(payload);
    return client.sendEmail({
        "From": "amigo@lustamigo.com",
        "To": payload.to,
        "ReplyTo": payload.email,
        "Subject": `Hola ${payload.name_1}! The Lust Amigo is here to take you on a journey`,
        "TextBody": `
            Hey,
            ${payload.name} sent a new message from your website!
            ${payload.message}
        `,
        "MessageStream": "outbound"
    }, (err, result) => {
    // if there happenend an error on the postmark side we send a 500 error to the client
    console.log(err);
    if (err) {
        return callback(null, {
            statusCode: 500,
            body: JSON.stringify({
                message: "Internal Server Error: " + err,
            })
        });
    }
    // if everything was fine we send status code 200
    return callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify({
            message: "Message sent successfully!",
        }),
    });
  });
}
