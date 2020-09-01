const postmark = require("postmark"); // require mail service, postmark in this case
const client = new postmark.Client("196074f2-f17a-491d-b568-5f21e898d0aa"); // your postmark api key
const headers = {
    "Access-Control-Allow-Origin": "*", // better change this for production
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type"
};

exports.handler = function (event, context, callback) {
    if (event.httpMethod !== "POST") { // Only allow POST requests
        return callback(null, {
            statusCode: 410,
            body: JSON.stringify({
                message: 'Only POST requests allowed.',
            }),
        });
    }

    
    const payload = JSON.parse(event.body); // Parse the body to JSON so we can use it in JS
    
    if (!payload.name_1 || !payload.email_1) { // Validate the form
        return callback(null, {
            statusCode: 422,
            headers,
            body: JSON.stringify({
                message: 'Required information is missing.',
            }),
        });
    }

    
    return client.sendEmail({ // If everything is good, we can send the first email
        "From": "amigo@lustamigo.com",
        "To": payload.email_1,
        "ReplyTo": "amigo@lustamigo.com",
        "Subject": `Hola ${payload.name_1}! The Lust Amigo is here to take you on a journey`,
        "TextBody": `
            Hey,
            ${payload.name_1} sent a new message from your website!
        `,
        "MessageStream": "outbound"
    }, (err, result) => {
        if (err) { // if there happenend an error on the postmark side we send a 500 error to the client
            return callback(null, {
                statusCode: 500,
                body: JSON.stringify({
                    message: "Internal Server Error: " + err,
                })
            });
        } else {
            client.sendEmail({ // If everything is good, we can send the first email
                "From": "amigo@lustamigo.com",
                "To": payload.email_1,
                "ReplyTo": "amigo@lustamigo.com",
                "Subject": `${payload.name_1} wants to take you on a journey`,
                "TextBody": `
                Hola ${payload.name_2}!
                ${payload.name_1} wants to find out what you have in common with The Lust Amigo!
                `,
                "MessageStream": "outbound"
            }, (err, result) => {
                if (err) {

                } else {
                    return callback(null, { // if everything was fine we send status code 200
                        statusCode: 200,
                        headers,
                        body: JSON.stringify({
                            message: "Message sent successfully!",
                        }),
                    });
                }
            });
            return callback(null, { // if everything was fine we send status code 200
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    message: "Message sent successfully!",
                }),
            });
        }
    });
}
