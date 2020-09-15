<template>
    <footer>
        <div class="footer__grid">
            <div class="footer__grid__cell">
                <img
                    :src="getImage('Main Logo')[0].img" 
                    alt="Basic Questions Selection"
                    class="footer__logo"
                >
                <h6>The Lust Amigo</h6>
                
            </div>
            <div class="footer__grid__cell">
                <h6>Site Links</h6>
                <ul>
                    <nuxt-link to="/questions">See The Questions</nuxt-link>
                    <nuxt-link to="/contact">Contact Us</nuxt-link>
                </ul>
            </div>
            <div class="footer__grid__cell">
                <div class="footer__sign__up__container">
                    <h6>Stay Up To Date</h6>
                    <p>Get the latest news, features, and sexual jokes from the Lust Amigo.</p>
                    <form class="footer__sign__up__form">
                        <input
                            v-model="footer.email_address"
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                        >
                        <button 
                            @click.stop.prevent="subscribeToNewsletter()"
                            class="footer__sign__up__button"
                        >
                            <span v-if="this.signedup === false">Sign Up</span>
                            <span v-if="this.signedup">Signed Up!</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <p class="footer__site__name">©The Lust Amigo - {{ currentYear }}</p>
    </footer>
</template>


<script>

export default {
    props: {
        
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        categories: function () {
            return this.$store.state.categories
        },
        currentYear: function () {
            return new Date().getFullYear()
        }
    },
    data() {
        return {
            footer: {
                email_address: ""
            },
            signedup: false
        }
    },
    methods: {
        getImage: function(name) { //GET IMAGE FROM LIST OF SITE IMAGES FROM NETLIFYCMS
            const images = this.sitewide.siteimages;
            return images.filter(img => img.imagename === name);
        },
        subscribeToNewsletter: function() { //SUBMIT TO POSTMARK
            const footerObj = JSON.parse(JSON.stringify(this.footer));
            console.log(footerObj)
            const firstEmailURL = "/.netlify/functions/signup-newsletter"
            return new Promise((resolve, reject) => {
                fetch(firstEmailURL, {
                    method: "POST",
                    body: JSON.stringify(footerObj)
                }).then(async response => {
                    return response.json();
                }).then(data => {
                    console.log(data);
                    resolve(data);
                }).catch(err => {
                    reject(err);
                });
            })
        }
    }
}
</script>


<style>
footer {
    width: 100%;
    margin: 80px auto 0;
    padding: 20px 20px 40px;
    background-color: var(--light-blue2);
}
.footer__grid {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    color: #FFF;
}
.footer__grid__cell {
    flex: 0 1 auto;
    margin: 10px;
    padding: 0 10px;
    color: #FFF;
}
.footer__logo {
    margin: 10px auto;
    display: block;
    max-width: 100px;
}
.footer__site__name {
    width: 100%;
    color: #FFF;
    font-size: .9em;
    line-height: 1em;
    text-align: center;
    margin: 40px auto 10px;
}
.footer__grid__cell a {
    color: #FFF;
    text-decoration: none;
    margin: 6px 0;
}
.footer__grid__cell ul {
    padding: 0 10px;
}
.footer__sign__up__container {
    text-align: right;
}
.footer__sign__up__container p {
    max-width: 290px;
}
.footer__sign__up__container p {
    max-width: 240px;
    margin-left: auto;
    font-size: 16px;
    line-height: 20px;
}
.footer__sign__up__container form {
    width: 100%;
    min-width: 290px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.footer__sign__up__container input {
    border: none;
    padding: 10px 10px;
    flex: 4;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.footer__sign__up__button {
    border: none;
    background-color: var(--green);
    padding: 10px;
    cursor: pointer;
    flex: 1;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #FFF;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 600px) {
    .footer__grid {
        justify-content: center;
    }
    .footer__sign__up__container {
        text-align: center;
    }
    .footer__sign__up__container p {
        max-width: 100%;
        margin-left: inherit;
    }
}
</style>
