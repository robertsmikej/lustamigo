const postmark = require("postmark");
const client = new postmark.Client(process.env.POSTMARK_API);
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
    
    if (!payload.email_address) { // Validate the form
        return callback(null, {
            statusCode: 422,
            headers,
            body: JSON.stringify({
                message: 'Required information is missing.',
            }),
        });
    }

    return client.sendEmailWithTemplate({ // USER 2
        "From": "amigo@lustamigo.com",
        "To": payload.email_address,
        "TemplateAlias": "newsletter_signup",
        "TemplateModel": {
            "email_address": payload.email_address,
            "product_url": "https://www.lustamigo.com",
            "product_name": "The Lust Amigo",
            "action_url": "https://www.lustamigo.com/",
            "support_email": "amigo@lustamigo.com",
            "company_name": "The Lust Amigo",
            "company_address": "USA",
            "sender_name": "The Lust Amigo"
        }
    }, (err, result) => {
        if (err) { // if there happenend an error on the postmark side we send a 500 error to the client
            return callback(null, {
                statusCode: 500,
                body: JSON.stringify({
                    message: "Internal Server Error: " + err,
                })
            });
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
}
