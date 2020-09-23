<template>
    <footer>
        <div class="footer__grid">
            <div
                v-if="sitewide.footer.show_site_links"
                class="footer__grid__cell footer__links"
            >
                <h6
                    class="footer__links__header"
                >
                    {{ sitewide.footer.sitelinks.links_header }}
                </h6>
                <ul>
                    <nuxt-link
                        v-for="(link, index) in this.getLinks()"
                        :key="index"
                        :to="link.name"
                    >
                        {{ link.formal_name }}
                    </nuxt-link>
                </ul>
            </div>
            <div class="footer__grid__cell footer__main">
                <img
                    v-if="sitewide.footer.show_logo"
                    :src="sitewide.footer.logo" 
                    alt=""
                    class="footer__logo"
                >
                <h6
                    v-if="sitewide.footer.show_name"
                    class="footer__logo__text__header"
                >
                    {{ sitewide.name }}
                </h6>
                <p
                    v-if="sitewide.footer.para && sitewide.footer.para.length > 10"
                    class="footer__para"
                >
                    {{ sitewide.footer.para }}
                </p>
            </div>
            <div class="footer__grid__cell footer__email">
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
        <p class="footer__site__name">©{{ sitewide.name }} - {{ currentYear }}</p>
    </footer>
</template>


<script>

export default {
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pages: function () {
            return this.$store.state.pages
        },
        currentYear: function () {
            return new Date().getFullYear()
        }
    },
    data() {
        return {
            links: [],
            footer: {
                email_address: ""
            },
            signedup: false
        }
    },
    methods: {
        getLinks: function() {
            const pages = this.pages;
            const linksWanted = this.sitewide.footer.sitelinks.links;
            let linksArr = [];
            linksWanted.forEach(linkname => {
                if (pages.hasOwnProperty(linkname)) {
                    linksArr.push(pages[linkname]);
                }
            });
            return linksArr;
        },
        subscribeToNewsletter: function() { //SUBMIT TO POSTMARK
            const footerObj = JSON.parse(JSON.stringify(this.footer));
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
    display: grid;
    /* flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between; 
    align-items: center;*/
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    color: #FFF;
}
.footer__grid__cell {
    /* flex: 1 0 auto; */
    margin: 10px;
    padding: 0 10px;
    color: #FFF;
}
.footer__logo {
    margin: 10px auto;
    display: block;
    max-width: 100px;
}
.footer__logo__text__header {
    text-align: center;
}
.footer__site__name {
    width: 100%;
    color: #FFF;
    font-size: .9em;
    line-height: 1em;
    text-align: center;
    margin: 40px auto 10px;
    text-align: center;
}
.footer__links__header {
    text-align: right;
}

.footer__para {
    max-width: 290px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}
.footer__grid__cell a {
    color: #FFF;
    text-decoration: none;
    margin: 6px 0;
}
.footer__grid__cell ul {
    padding: 0 10px;
    text-align: right;
}
.footer__sign__up__container {
    text-align: left;
}
.footer__sign__up__container p {
    max-width: 290px;
}
.footer__sign__up__container p {
    max-width: 240px;
    font-size: 16px;
    line-height: 20px;
}
.footer__sign__up__container form {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: center;
    align-items: flex-start;
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
    white-space: nowrap;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 900px) {
    .footer__grid {
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
        grid-gap: 0;
    }
    .footer__main {
        grid-row: 1;
    }
    .footer__links {
        grid-row: 2;
    }
    .footer__links__header, 
    .footer__grid__cell ul,
    .footer__sign__up__container,
    .footer__sign__up__container p {
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        max-width: 400px;
        width: 100%;
    }
    .footer__email {
        grid-row: 3;
        width: 100%;
        max-width: 400px;
        margin: 10px auto;
        text-align: center;
    }
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
