<template>
    <div class="contact">
        <div class="half__header">
            <div class="half__header__inner">
                <h1>Contact The Lust Amigo</h1>
                <p>Want to reach out and tell us something? Have a suggestion to make our site better? Please let us know and we'll do our best to get back quickly.</p>
            </div>
        </div>
        <form 
            class="contact__form" 
            netlify
            name="Contact"
            data-netlify-recaptcha="true"
            v-if="this.sent === false"
        >
            <fieldset>
                <p>Your Name</p>
                <input aria-label="Full Name" placeholder="Eg. Maria Manchild" type="text" v-model="formData.name" required autofocus>
            </fieldset>
            <fieldset>
                <p>Your Email Address</p>
                <input aria-label="Email Address" placeholder="Eg. lustylarry@gmail.com" type="email" v-model="formData.email" required>
            </fieldset>
            <fieldset>
                <p>How Can I Help?</p>
                <textarea aria-label="Message To Us" rows="4" v-model="formData.message" required></textarea>
            </fieldset>
            <fieldset>
                <div data-netlify-recaptcha="true"></div>
                <button 
                    data-submit="Sending"
                    class="submit__button contact__submit js__contact__submit"
                >
                    Send Message
                </button>
            </fieldset>
        </form>
        <div class="contact__sent" v-if="this.sent">
            <h2>Message Sent!</h2>
            <p>Gracias, and we'll be in touch soon!</p>
        </div>
    </div>
</template>

<script>
const axios = require('axios');

export default {
    data() {
        return {
            formData: {
                name: "",
                email: "",
                message: ""
            },
            sent: false
        }
    },
    methods: {
        handleSubmit: function () {
            let emaildata = JSON.stringify({
                name: this.formData.name,
                email: this.formData.email,
                message: this.formData.message
            });
        }
    },
    head () {
        return {
            title: "Lust Amigo | Contact The Lust Amigo",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: "Do you have any questions for the Lust Amigo? He's here to help!"                
                },
                {
                    hid: 'robots', 
                    name: 'robots', 
                    content: 'index, follow'
                }
            ]
        }
    }
}
</script>

<style>
.contact__form {
    max-width: 600px;
    margin: 0 auto 40px;
}
.contact__form fieldset {
    border: none;
}
.contact__form p {
    text-align: center;
    margin: 5px 0;
    font-size: 1.3em;
}
.contact__form input, textarea {
    width: 100%;
    padding: 10px;
    font-size: 1.2em;
    line-height: 1.4em;
    font-family: 'Neucha', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: var(--dark-blue);
    border-color: var(--dark-blue);
    border-width: 1px;
    padding: 12px 15px;
}
.contact__sent {
    margin: 50px auto 100px;
    max-width: 800px;
    text-align: center;
}
</style>
