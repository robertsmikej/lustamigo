<template>
    <section class="container">
        <Hero :dataObj="pageData"/>
        <span id="get__started"></span>
        <div class="page__content page__content--nowrap">
            <div class="page__content--side">
                <div
                    v-html="$md.render(pageData.contentSection1.content_1)"
                    class="padded__section"
                ></div>
                <div class="qa__cell example__question">
                    <Question
                        :question="{question: pageData.examplequestion.questiontext, question_explanation: pageData.examplequestion.questionexplaination, checked: exampleChecked}" 
                        :example="true" 
                        :users="users"
                    />
                </div>
                <div class="padded__section">
                    <h2>The Sexy Pepper!</h2>
                    <span class="pepper__example question__special">
                        <img 
                            :src="getImage('Pepper')[0].img" 
                            alt="This is Mucho Hot!" 
                            class="pepper__example__img"
                        />
                        <div class="pepper__example__text">
                            &#8592; That's one Sexy Pepper!
                        </div>
                    </span>
                </div>
                <div
                    v-html="$md.render(pageData.contentSection1.content_2)"
                    class="padded__section" 
                ></div>
            </div>

            <div class="page__content--side">
                <AdSidebar
                    v-if="pageData.ads.hasOwnProperty('sidebars') && pageData.ads.sidebars[0]"
                    :ad="pageData.ads.sidebars[0]"
                />
            </div>
        </div>
        <div class="page__content page__content--nowrap">
            <div class="page__content--side">
                <form class="enter__info__fields">
                    <div class="info__section">
                        <h2>You</h2>
                        <div class="info__text__field">
                            <label for="name_1">Your First Name</label>
                            <p class="info__text__error__para">Please Put Your First Name Here!</p>
                            <input 
                                type="name"
                                name="name_1"
                                id="name_1"
                                v-model="users.name_1"
                            >
                        </div>
                        <div class="info__text__field">
                            <label for="email_1">Your Email Address</label>
                            <p class="info__text__error__para">Please Put Your Email Address Here!</p>
                            <input 
                                type="email"
                                name="email_1"
                                id="email_1"
                                v-model="users.email_1"
                            >
                        </div>
                        <p class="equipment__label">Their Equipment</p>
                        <div class="info__radio__field">
                            
                            <input 
                                type="radio" 
                                id="equipment_1_male" 
                                name="equipment_1"
                                value="male" 
                                v-model="users.equipment_1" 
                            >
                            <label 
                                for="equipment_1_male"
                                class="info__radio__field--equipment"
                            >
                                <div class="form__img__container">
                                    <img 
                                        :src="getImage('Pepper')[0].img" 
                                        alt="Male Gender Selection" 
                                        class="form__img"
                                    >
                                </div>
                                <p class="form__para">Male</p>
                            </label>
                            <input
                                type="radio"
                                id="equipment_1_female"
                                name="equipment_1"
                                value="female"
                                v-model="users.equipment_1"
                            >
                            <label
                                for="equipment_1_female"
                                class="info__radio__field--equipment"
                            >
                                <div class="form__img__container">
                                    <img 
                                        :src="getImage('Avocado')[0].img" 
                                        alt="Female Gender Selection"
                                        class="form__img"
                                    >
                                </div>
                                <p class="form__para">Female</p>
                            </label>
                        </div>
                    </div>
                    <div class="info__section">
                        <h2 class="form__spacer">Them</h2>
                        <div class="info__text__field">
                            <label for="name_2">Their First Name</label>
                            <p class="info__text__error__para">Please Put Your Partner's First Name Here!</p>
                            <input 
                                type="name"
                                name="name_2"
                                id="name_2"
                                v-model="users.name_2"
                            >
                        </div>
                        <div class="info__text__field">
                            <label for="email_2">Their Email Address</label>
                            <p class="info__text__error__para">Please Put Your Partner's Email Address Here!</p>
                            <input 
                                type="email"
                                name="email_2"
                                id="email_2"
                                v-model="users.email_2"
                            >
                        </div>
                        <p class="equipment__label">Their Equipment</p>
                        <div class="info__radio__field">
                            
                            <input 
                                type="radio" 
                                id="equipment_2_male" 
                                name="equipment_2"
                                value="male" 
                                v-model="users.equipment_2" 
                            >
                            <label 
                                for="equipment_2_male"
                                class="info__radio__field--equipment"
                            >
                                <div class="form__img__container">
                                    <img 
                                        :src="getImage('Pepper')[0].img" 
                                        alt="Male Gender Selection" 
                                        class="form__img"
                                    >
                                </div>
                                <p class="form__para">Male</p>
                            </label>
                            <input
                                type="radio"
                                id="equipment_2_female"
                                name="equipment_2"
                                value="female"
                                v-model="users.equipment_2"
                            >
                            <label
                                for="equipment_2_female"
                                class="info__radio__field--equipment"
                            >
                                <div class="form__img__container">
                                    <img 
                                        :src="getImage('Avocado')[0].img" 
                                        alt="Female Gender Selection"
                                        class="form__img"
                                    >
                                </div>
                                <p class="form__para">Female</p>
                            </label>
                        </div>
                    </div>
                    <div class="info__section">
                        <h2 class="form__spacer">Types of Questions</h2>
                        <div class="info__radio__field info__radio__field--spicelevel">
                            <input 
                                type="radio" 
                                id="eldiablo" 
                                name="spice_level" 
                                value="10" 
                                v-model="users.spice_level" 
                            >
                            <label for="eldiablo">
                                <div class="form__img__container">
                                    <img
                                        :src="getImage('Booze')[0].img" 
                                        alt="Advanced Questions Selection"
                                        class="form__img"
                                    >
                                </div>
                                <p class="form__para">El Diablo</p>
                                <p class="small__para">All the fun stuff.</p>
                            </label>
                            <input 
                                type="radio" 
                                id="spicy" 
                                name="spice_level" 
                                value="7" 
                                v-model="users.spice_level" 
                            >
                            <label for="spicy">
                                <div class="form__img__container">
                                    <img
                                        :src="getImage('Scorpion')[0].img" 
                                        alt="Advanced Questions Selection"
                                        class="form__img"
                                    >
                                </div>
                                <p class="form__para">Spicy</p>
                                <p class="small__para">Most of the fun stuff.</p>
                            </label>
                            <input 
                                type="radio" 
                                id="medium" 
                                name="spice_level" 
                                value="5" 
                                v-model="users.spice_level"
                            >
                            <label for="medium">
                                <div class="form__img__container">
                                    <img
                                        :src="getImage('Taco')[0].img" 
                                        alt="Basic Questions Selection"
                                        class="form__img"
                                    >
                                </div>
                                <p class="form__para">Medium</p>
                                <p class="small__para">More than the basics.</p>
                            </label>
                            <input 
                                type="radio" 
                                id="mild" 
                                name="spice_level" 
                                value="3" 
                                v-model="users.spice_level"
                            >
                            <label for="mild">
                                <div class="form__img__container">
                                    <img
                                        :src="getImage('Strawberry Ice Cream')[0].img" 
                                        alt="Basic Questions Selection"
                                        class="form__img"
                                    >
                                </div>
                                <p class="form__para">Mild</p>
                                <p class="small__para">Just the basics.</p>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div class="page__content--side">
                <AdSidebar
                    v-if="pageData.ads.hasOwnProperty('sidebars') && pageData.ads.sidebars[1]"
                    :ad="pageData.ads.sidebars[1]"
                />
            </div>
        </div>
        <div class="page__content">
                <p>This site is not meant for any ninos under 18 years old.</p>
                <p class="missing__info__para" v-if="formMissingData">Something is missing above... please fill out all the info, you silly billy!</p>
                <button 
                    @click.stop.prevent="setData()"
                    class="submit__button"
                >
                    <span v-if="this.starting === false">Start The Quiz</span>
                    <span v-if="this.starting">Starting...</span>
                </button>
                <p class="info__para disclaimer__para">We take your privacy seriously, and apart from anonymous statistics, we don’t (and won't) share information with anyone else, and <u>never</u> anything personally identifiable.</p>
        </div>
    </section>
</template>

<script>
let postmark = require("postmark");

export default {
    watchQuery: true,
    data () {
        return {
            devMode: false,
            users: {
                uuid: "1",
                name_1: "",
                equipment_1: "",
                email_1: "",
                name_2: "",
                equipment_2: "",
                email_2: "",
                coupletype: "straight",
                spice_level: 7,
                questions: []
            },
            formMissingData: false,
            starting: false,
            exampleChecked: 1
        }
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pageData: function () {
            return this.$store.state.pages.index
        },
        products: function () {
            return this.$store.state.products
        }
    },
    methods: {
        findProduct: function(type, name) {
            let narrowedProduct = {};
            this.products[type].forEach(prod => {
                if (prod.productimgs && prod.productimgs.imgs) {
                    prod.productimgs.imgs.forEach((img, index) => {
                        if (img.name === name) {
                            narrowedProduct = {
                                prod: prod,
                                img: img.img,
                                name: img.name,
                                type: img.type,
                                index: index
                            };
                        }
                    });
                }
            });
            return narrowedProduct;
        },
        getImage: function(name) {
            const images = this.pageData.pageimages;
            return images.filter(img => img.imagename === name);
        },
        validateSelections: function() {
            const inputs = document.querySelector(".enter__info__fields").getElementsByTagName("input");
            const empties = Array.from(inputs).filter(input => input.value.length === 0)
            // const empties
            if (empties.length === 0) {//NAMES AND EMAILS ARE FILLED OUT
                return true;
            } else {//AT LEAST ONE NAME OR EMAIL ISNT FILLED OUT
                this.formMissingData = true;
                Array.from(inputs).forEach(input => {
                    input.classList.remove("boxGlow");
                });
                empties.forEach((empty, index) => {
                    if (index === 0) {
                        this.$scrollTo(empty, 300, {offset: -240});
                        empty.focus();
                    }
                    empty.closest(".info__text__field").querySelector(".info__text__error__para").style.display = "block";
                });
                return false;
            }
        },
        getOrient: function () {
            if (this.users.equipment_1 === this.users.equipment_2) {
                if (this.users.equipment_1 === "male") {
                    return "gay-male";
                } else {
                    return "gay-female";
                }
            }
            return "straight";
        },
        returnFirstName: function (name) {
            return name.indexOf(" ") >= 0 ? name.split(" ")[0] : name;
        },
        setData: function() {
            if (this.validateSelections()) {
                this.starting = true;
                this.users.uuid = new Date().getTime() + Math.floor(Math.random() * 100) + 1;
                this.users.coupletype = this.getOrient();
                this.users.name_1 = this.returnFirstName(this.users.name_1);
                this.users.name_2 = this.returnFirstName(this.users.name_2);
                this.spice_level = parseInt(this.spice_level);
                this.submitInitialToDatabase().then(response => { //SUBMIT TO FAUNA
                    const dataReturn = response.json();
                    if (Number(response.status) !== 200) {
                        console.error('Error submitting - database')
                    } else {
                        console.info('Database successfully submitted and Email Sending Now')
                        this.sendFirstEmail().then(response => {
                            const emailReturn = response.json();
                            if (Number(response.status) !== 200) {
                                console.error('Error submitting - database')
                            } else {
                                if (!this.devMode) {
                                    this.$router.push('/questions?uuid=' + this.users.uuid + "-1");
                                } else {
                                    console.info("Turn DevMode Off To Go To Next Page");
                                } 
                            }
                        });
                    }
                });
            }
        },
        submitInitialToDatabase: function() { //SUBMIT INITIAL TO FAUNA
            let userDataObj = JSON.parse(JSON.stringify(this.users));
            const initialDatabaseURL = "/.netlify/functions/send-initial-database"
            return new Promise((resolve, reject) => {
                fetch(initialDatabaseURL, {
                    method: "POST",
                    body: JSON.stringify(userDataObj)
                }).then(response => {
                    resolve(response);
                }).catch(err => {
                    reject(err);
                });
            })
        },
        sendFirstEmail: function() { //SUBMIT TO POSTMARK
            let userDataObj = JSON.parse(JSON.stringify(this.users));
            const firstEmailURL = "/.netlify/functions/send-initial-email-1"
            return new Promise((resolve, reject) => {
                fetch(firstEmailURL, {
                    method: "POST",
                    body: JSON.stringify(userDataObj)
                }).then(response => {
                    resolve(response);
                }).catch(err => {
                    reject(err);
                });
            })
        },
        randomCheckInit: function () {
            setTimeout(() => {
                this.exampleChecked = Math.floor(Math.random() * (2 - 0 + 1) + 0);
            }, 1200);
        }
    },
    mounted () {
        //INITIAL CHECKING OF THE RADIO BUTTONS TO SHOW DEFAULT VALUES
        if (Math.floor( Math.random() * 2 )) {
            this.users.equipment_1 = 'female'
        } else {
            this.users.equipment_1 = 'male';
        }
        if (Math.floor( Math.random() * 2 )) {
            this.users.equipment_2 = 'male'
        } else {
            this.users.equipment_2 = 'female';
        }
        if (this.devMode) {
            this.users.name_1 = "";
            this.users.email_1 = ""
            this.users.name_2 = "Audrey";
            this.users.email_2 = "amigo@lustamigo.com"
        }
        this.randomCheckInit();
        // this.pullInAdData();
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
            ],
            script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
        }
    },
}
</script>

<style>
.example__question {
    background-color: var(--question-color);
    color: #FFF;
    margin: 30px auto;
}
.example__question .question__answer__cell {
    border-left: 1px solid var(--gun-grey);
}
body .pepper__example {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    margin: 0 auto;
    cursor: default;
}
body .pepper__example__img {
    max-width: 100%;
    max-height: 50px;
    animation: spicyshakerExample 2.9s;
    animation-iteration-count: infinite;
    animation-direction: normal;
}
@keyframes spicyshakerExample {
    0% {
        -webkit-transform: rotate(0);
        -webkit-filter: grayscale(.5);
        transform: rotate(0);
        filter: grayscale(0);
    }
    10% {
        -webkit-transform: rotate(15deg);
        transform: rotate(15deg);
    }
    20% {
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
    }
    30% {
        -webkit-transform: rotate(15deg);
        transform: rotate(15deg);
    }
    40% {
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
    }
    50% {
        -webkit-transform: rotate(15deg);
        -webkit-filter: grayscale(.2);
        transform: rotate(15deg);
        filter: grayscale(.5);
    }
    60% {
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
    }
    70% {
        -webkit-transform: rotate(15deg);
        transform: rotate(15deg);
    }
    80% {
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
    }
    90% {
        -webkit-transform: rotate(15deg);
        transform: rotate(15deg);
    }
    100% {
        -webkit-transform: rotate(0);
        -webkit-filter: grayscale(0);
        transform: rotate(0deg);
        filter: grayscale(0);
    }
}
.pepper__example__text {
    position: absolute;
    left: 40px;
    width: 170px;
    cursor: default;
    color: var(--dark-orange);
    text-transform: capitalize;
}



.small__para {
    transition: all .6s;
}
.disclaimer__para {
    max-width: 700px;
    font-size: 1.1em;
    margin: 30px auto 10px;
}
.missing__info__para {
    color: var(--dark-red);
    font-size: 1.5em;
}
.info__text__error__para {
    color: var(--dark-red);
    font-size: 1em;
    margin: 0 auto 2px;
    display: none;
}




</style>