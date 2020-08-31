<template>
    <section class="container">
        <Hero :dataObj="pageData"/>
        <span id="get__started"></span>
        <div class="enter__info">
            <div
                v-html="$md.render(pageData.contentSection1.content_1)"
                class="padded__section"
            ></div>
            <div class="qa__cell example__question">
                <Question
                    :hotness="getImage('Pepper')[0].img"
                    :question="{question: pageData.examplequestion.questiontext, question_explanation: pageData.examplequestion.questionexplaination}" 
                    :example="true" 
                    :users="users" 
                />
            </div>
            <div class="padded__section">
                <div class="pepper__section">
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
                    <p class="info__para">
                        You can also click the sexy pepper icon next to each question to mark things that you think are especially caliente!.  
                    </p>
                </div>
            </div>
            <div
                v-html="$md.render(pageData.contentSection1.content_2)"
                class="padded__section" 
            ></div>
            <form class="enter__info__fields">
                <div class="info__section">
                    <h2>You</h2>
                    <div class="info__text__field">
                        <label for="name1">Your First Name</label>
                        <input 
                            type="name"
                            name="name1"
                            id="name1"
                            v-model="users.name_1"
                        >
                    </div>
                    <div class="info__text__field">
                        <label for="email1">Your Email Address</label>
                        <input 
                            type="email"
                            name="email1"
                            id="email1"
                            v-model="users.email_1"
                        >
                    </div>
                    <div class="info__radio__field">
                        <p class="form__para">Their Equipment</p>
                        <input 
                            type="radio" 
                            id="equipment-1-male" 
                            name="equipment-1"
                            value="male" 
                            v-model="users.equipment_1" 
                        >
                        <label for="equipment-1-male">
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
                            id="equipment-1-female"
                            name="equipment-1"
                            value="female"
                            v-model="users.equipment_1"
                        >
                        <label for="equipment-1-female">
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
                        <label for="name2">Their First Name</label>
                        <input 
                            type="name"
                            name="name2"
                            id="name2"
                            v-model="users.name_2"
                        >
                    </div>
                    <div class="info__text__field">
                        <label for="email2">Their Email Address</label>
                        <input 
                            type="email"
                            name="email2"
                            id="email2"
                            v-model="users.email_2"
                        >
                    </div>
                    <div class="info__radio__field">
                        <p class="form__para">Their Equipment</p>
                        <input 
                            type="radio" 
                            id="equipment-2-male" 
                            name="equipment-2"
                            value="male" 
                            v-model="users.equipment_2" 
                        >
                        <label for="equipment-2-male">
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
                            id="equipment-2-female"
                            name="equipment-2"
                            value="female"
                            v-model="users.equipment_2"
                        >
                        <label for="equipment-2-female">
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
                    <div class="info__radio__field">
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
                            value="4" 
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
                            value="1" 
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
            <p>This site is not meant for any ninos under 18 years old.</p>
            <p class="missing__info__para" v-if="formMissingData">Something is missing above... please fill out all the info, you silly billy!</p>
            <button 
                @click.stop.prevent="setData()"
                class="submit__button"
            >
                <span v-if="this.starting === false">Start The Quiz</span>
                <span v-if="this.starting">Starting...</span>
            </button>
            <p class="info__para disclaimer__para">We take your privacy seriously, and apart from anonymous statistics, we don’t share information with anyone else, and <u>never</u> anything personally identifiable.</p>
        </div>
    </section>
</template>

<script>
export default {
    watchQuery: true,
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pageData: function () {
            return this.$store.state.pages.index
        }
    },
    data () {
        return {
            devMode: true,
            users: {
                uuid: this.$uuid.v1(),
                name_1: "",
                equipment_1: "",
                email_1: "",
                name_2: "",
                equipment_2: "",
                email_2: "",
                coupletype: "straight",
                spice_level: 7
            },
            formMissingData: false,
            starting: false
        }
    },
    methods: {
        getImage: function(name) {
            const images = this.pageData.pageimages;
            return images.filter(img => img.imagename === name);
        },
        validateSelections: function () {
            const inputs = document.querySelector(".enter__info__fields").getElementsByTagName("input");
            const empties = Array.from(inputs).filter(input => input.value.length === 0)
            // const empties
            if (empties.length > 0 || this.devMode) {//NAMES AND EMAILS ARE FILLED OUT
                return true;
            } else {//AT LEAST ONE NAME OR EMAIL ISNT FILLED OUT
                this.formMissingData = true;
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
                this.users.coupletype = this.getOrient();
                this.users.name_1 = this.returnFirstName(this.users.name_1);
                this.users.name_2 = this.returnFirstName(this.users.name_2);
                this.spice_level = parseInt(this.spice_level);
                console.log(this.users); //this.users is data to send to database, etc.

            }
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
    },
    head () {
        return {
            title: "Lust Amigo | Sexy Quiz To Bring You Closer With Your Partner",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: "The Lust Amigo is an fun, quick way to see what sort of kinks, and desires you have in common with your partner.",
                    hid: 'robots', name: 'robots', content: 'index, follow'
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
    max-width: 860px;
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

.enter__info {
    padding: 70px 0;
    width: 100%;
    max-width: 960px;
}
.enter__info h2 {
    color: var(--red);
    margin-top: 24px;
}
.info__para {
    max-width: 860px;
    margin: 10px auto 10px;
    position: relative;
}
.enter__info__fields {
    width: 100%;
    /* max-width: 860px; */
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    margin: 50px auto 0;
}
.info__section {
    padding: 20px 40px 60px;
    width: 100%;
    /* max-width: 860px; */
    margin: 0px auto 40px;
}
.info__section:nth-of-type(odd) {
    background: var(--light-blue);
}
.info__section:nth-of-type(even) {
    background: var(--guac-green);
}
.enter__info__fields label {
    margin: 5px 0;
    font-size: 1.6em;
    color: #FFF;
}
.enter__info__fields input {
    width: 100%;
    padding: 10px;
    font-size: 1.5em;
    line-height: 1.4em;
    font-family: 'Neucha', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    text-align: center;
    color: var(--dark-blue);
}
.info__text__field {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    margin: 0px 0 20px;
}
.form__spacer {
    margin-top: 0px;
}
.info__radio__field {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;
    margin: 20px 0 0;
}
.info__radio__field input {
    position: absolute;
    left: -100000px;
}
.info__radio__field label {
    flex: 1 1 0;
    transition: all .5s;
    border-radius: 10px;
    cursor: pointer;
    padding: 0 8px;
    margin: 4px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    color: #FFF;
}
.info__radio__field label:hover {
    background: var(--yellow);
}
.info__radio__field input[type="radio"]:checked + label {
    background: var(--yellow);
}
/* .info__radio__field input[type="radio"]:checked + label .form__para, */
.info__radio__field input[type="radio"]:checked + label .small__para {
    color: var(--blue);
}
.form__img__container {
    padding: 40px 20px 30px;
    height: 200px;
    max-height: 200px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
}
.form__img {
    max-width: 160px;
    max-height: 160px;
    object-fit: contain;
}
.form__para {
    width: 100%;
    margin: 0px;
    z-index: 1;
    font-size: 1.6em;
    color: #FFF;
    transition: all .6s;
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
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 730px) {
    .enter__info {
        padding: 30px 0;
        width: 100%;
    }
    .enter__info h2, .enter__info p {
        padding: 0 2px;
    }
    .info__para {
        margin: 0 0 14px;
        align-self: center;
    }
    body .pepper__example {
        height: 36px;
        width: 30px;
        max-width: 30px;
    }
    body .pepper__example__img {
        top: 2px;
        left: 0px;
        height: 100%;
    }
    .example__question .question__answer__cell {
        border-left: none;
    }
    .enter__info__fields {
        padding: 0px 0;
        margin-top: 40px;
    }
    .info__section {
        padding: 40px 20px;
    }
    .form__img {
        max-width: 100%;
    }
    .enter__info__fields input {
        border: 2px solid var(--gun-grey);
        border-radius: 8px;
    }
    .small__para {
        text-align: center;
    }
    .form__img__container {
        padding: 30px 10px 30px;
        max-height: 70%;
    }
    body .disclaimer__para {
        padding: 0 10px;
    }
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 480px) {
    .info__section {
        padding: 40px 14px;
    }
    .info__radio__field label {
        padding: 0 6px;
    }
}
</style>