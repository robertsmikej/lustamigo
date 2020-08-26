<template>
    <section
        class="container"
    >
        <Hero 
            :dataObj="pageData"
        />
        <span 
            id="get__started"
        ></span>
        <div 
            class="enter__info"
        >
            <div
                v-html="$md.render(pageData.contentSection1.content_1)"
                class="padded__section"
            ></div>
            <div class="qa__cell example__question">
                <Question
                    :hotness="getImage('Pepper')[0].img"
                    :question="this.fakeQuestion" 
                    :example="true" 
                    :name_1="'Juan'" 
                    :name_2="'Maria'" 
                    :gender_1="'Male'" 
                    :gender_2="'Female'"
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
                        <div 
                            class="pepper__example__text"
                        >
                            &#8592; That's one Sexy Pepper!
                        </div>
                    </span>
                    <p class="info__para">
                        You can also click the sexy pepper icon next to each question to mark things that you think are especially caliente!.  
                    </p>
                </div>
            </div>
            <div class="padded__section" v-html="$md.render(pageData.contentSection1.content_2)"></div>
            <form class="enter__info__fields">
                <div class="info__section">
                    <h2>You</h2>
                    <div class="info__text__field">
                        <label for="yourname">Your First Name</label>
                        <input type="name" name="yourname" id="yourname" v-model="formData.name_1">
                    </div>
                    <div class="info__text__field">
                        <label for="youremail">Your Email Address</label>
                        <input type="email" name="youremail" id="youremail" v-model="formData.email_1">
                    </div>
                    <div class="info__radio__field">
                        <p class="form__para">Your Equipment</p>
                        <input type="radio" id="your-gender-male" name="yourgender" value="Male" v-model="formData.gender_1" checked>
                        <label for="your-gender-male">
                            <div class="form__img__container">
                                <img 
                                    :src="getImage('Pepper')[0].img" 
                                    alt="Male Gender Selection" 
                                    class="form__img"
                                >
                            </div>
                            <p class="form__para">Male</p>
                        </label>
                        <input type="radio" id="your-gender-female" name="yourgender" value="Female" v-model="formData.gender_1">
                        <label for="your-gender-female">
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
                        <label for="theirname">Their First Name</label>
                        <input type="name" name="theirname" id="theirname" v-model="formData.name_2">
                    </div>
                    <div class="info__text__field">
                        <label for="theiremail">Their Email Address</label>
                        <input type="text" name="theiremail" id="theiremail" v-model="formData.email_2">
                    </div>
                    <div class="info__radio__field">
                        <p class="form__para">Their Equipment</p>
                        <input type="radio" id="their-gender-male" name="theirgender" value="Male" v-model="formData.gender_2">
                        <label for="their-gender-male">
                            <div class="form__img__container">
                                <img 
                                    :src="getImage('Pepper')[0].img" 
                                    alt="Male Gender Selection" 
                                    class="form__img"
                                >
                            </div>
                            <p class="form__para">Male</p>
                        </label>
                        <input type="radio" id="their-gender-female" name="theirgender" value="Female" checked v-model="formData.gender_2">
                        <label for="their-gender-female">
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
                        <input type="radio" id="spicy" name="questiontypes" value="Spicy" v-model="formData.question_types" checked>
                        <label for="spicy">
                            <div class="form__img__container">
                                <img
                                    :src="getImage('Scorpion')[0].img" 
                                    alt="Advanced Questions Selection"
                                    class="form__img"
                                >
                            </div>
                            <p class="form__para">Spicy</p>
                            <p class="small__para">You'll see all the fun stuff</p>
                        </label>
                        <input type="radio" id="tame" name="questiontypes" value="Tame" v-model="formData.question_types">
                        <label for="tame">
                            <div class="form__img__container">
                                <img
                                    :src="getImage('Strawberry Ice Cream')[0].img" 
                                    alt="Basic Questions Selection"
                                    class="form__img"
                                >
                            </div>
                            <p class="form__para">Mild</p>
                            <p class="small__para">Just the basics, nice &amp; easy</p>
                        </label>
                    </div>
                </div>
            </form>
            <p>This site is not meant for any ninos under 18 years old. </p>
            <p class="missing__info__para" v-if="!this.formFilled">Something is missing above... please fill out all the info, you silly billy!</p>
            <button class="submit__button" @click.stop.prevent="setData()">
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
            uuid: this.$uuid.v1(),
            formData: {
                name_1: "",
                email_1: "",
                gender_1: "Male",
                name_2: "",
                email_2: "",
                gender_2: "Female",
                coupletype: "",
                question_types: "Spicy"
            },
            fakeQuestion: {
                question: "Give A Sexy Massage To user",
                question_explanation: "If theres a section that may not make sense, we'll try to explain here."
            },
            formFilled: true,
            starting: false
        }
    },
    methods: {
        getImage: function(name) {
            let images = this.pageData.pageimages;
            return images.filter(img => img.imagename === name);
        },
        //FIGURE OUT COUPLE TYPE HERE AND ADD TO FORMDATA OBJECT OR SIMILAR
        setData: function() {
            if (document.getElementById("yourname").value.length > 0 && document.getElementById("youremail").value.length > 0 && document.getElementById("theirname").value.length > 0 && document.getElementById("theiremail").value.length > 0) {
                this.formFilled = true;
                this.starting = true;
                if (document.getElementById("their-gender-male").checked && document.getElementById("your-gender-male").checked || document.getElementById("their-gender-female").checked && document.getElementById("your-gender-female").checked) {
                    this.formData.coupletype = "gay";
                } else {
                    this.formData.coupletype = "straight";
                }
                if (this.formData.name_1.indexOf(" ") >= 0) {
                    this.formData.name_1 = this.formData.name_1.split(" ")[0];
                }
                if (this.formData.name_2.indexOf(" ") >= 0) {
                    this.formData.name_2 = this.formData.name_2.split(" ")[0];
                }
                let data = {
                    "uuid": this.uuid,
                    "name_1": this.formData.name_1,
                    "email_1": this.formData.email_1,
                    "gender_1": this.formData.gender_1,
                    "name_2": this.formData.name_2,
                    "email_2": this.formData.email_2,
                    "gender_2": this.formData.gender_2,
                    "couple_type": this.formData.coupletype,
                    "question_types": this.formData.question_types,
                };
                let th = this;
                axios.post("https://www.lustamigo.com/directus/public/_/items/responses", data).then(function (response) {
                    if (response.status === 200) {
                            const msg = JSON.stringify({
                                "uuid": th.uuid,
                                "name1": th.formData.name_1,
                                "name2": th.formData.name_2,
                                "name1_email": th.formData.email_1,
                                "name2_email": th.formData.email_2,
                                "gender_1": th.formData.gender_1,
                                "gender_2": th.formData.gender_2,
                                "couple_type": th.formData.coupletype,
                                "question_types": th.formData.question_types
                            });
                        try {
                            let xhr = new XMLHttpRequest();
                            let url = "/sendgrid.php";
                            xhr.open("POST", url);
                            xhr.setRequestHeader("Content-type", "application/json");
                            xhr.onreadystatechange = function () {
                                if (xhr.readyState === 4 && xhr.status === 200) {
                                    th.$router.push("/questions?id=" + th.uuid + "&user=1");
                                }
                            };
                            xhr.onerror = function () {
                                console.error("Cannot Send Initial Email");
                            }
                            xhr.send(msg);
                        } catch (e) {
                            console.log("PHP File Not Able To Fire");
                            // th.$router.push("/questions?id=" + th.uuid + "&user=1");
                        }
                    }
                });
            } else {
                this.formFilled = false;
            }
        }
    },
    mounted () {
        document.getElementById("your-gender-male").checked = true;
        document.getElementById("their-gender-female").checked = true;
        document.getElementById("spicy").checked = true;
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
    max-width: 860px;
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
    width: 49%;
    transition: all .5s;
    border-radius: 10px;
    cursor: pointer;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
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
    max-height: 90%;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
}
.form__img {
    max-width: 90%;
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