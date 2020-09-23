<template>
    <div class="contact">
        <div class="page__content page__content--nowrap">
            <div class="page__content--side half__header">
                <div
                    v-html="$md.render(pageData.contentSection1.content_1)"
                    class="padded__section half__header__inner"
                ></div>
            </div>
        </div>
        <form 
            v-if="this.sent === false"
            netlify
            data-netlify-recaptcha="true"
            name="Contact"
            class="contact__form" 
        >
            <fieldset>
                <p>Your Name</p>
                <input 
                    v-model="formData.name"
                    aria-label="Full Name" 
                    placeholder="Eg. Maria Manchild" 
                    type="text"
                    name="Name"
                    autofocus
                >
            </fieldset>
            <fieldset>
                <p>Your Email Address</p>
                <input
                    v-model="formData.email"
                    aria-label="Email Address"
                    placeholder="Eg. lustylarry@gmail.com"
                    type="email"
                    name="Email Address"
                >
            </fieldset>
            <fieldset>
                <p>How Can I Help?</p>
                <textarea
                    v-model="formData.message"
                    aria-label="Message To Us"
                    rows="4"
                    name="Message"
                ></textarea>
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
        <div
            v-if="this.sent"
            class="contact__sent"
        >
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
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pageData: function () {
            return this.$store.state.pages.contact
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
            title: this.pageData.seo.title,
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: this.pageData.seo.description
                },
                {
                    hid: 'robots', 
                    name: 'robots', 
                    content: this.pageData.seo.indexfollow
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
