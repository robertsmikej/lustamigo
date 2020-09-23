<template>
    <div class="container">
        <div class="questions__inner page__content">
            <!-- CURRENT USER IS NOT DONE -->
            <div
                v-show="!this.currentUserDone"
                class="half__header"
            >
                <div
                    v-if="this.justQuestions === true"
                    class="half__header__inner"
                >
                    <h1>Just Want To Peek At The Questions?</h1>
                    <p>That's awesome! Be sure to sign up to take the quiz with your partner, you'll get better use out of the Lust Amigo's magic that way. Have fun!</p>
                </div>
                <div
                    v-show="!this.currentUserDone && !this.allDone && !this.justQuestions"
                    class="half__header__inner"
                >
                    <h1
                        v-show="user_name.length >= 2"
                    >
                        Let's Do This, {{ user_name }}!
                    </h1>
                    <p>As soon as you and {{ partner_name }} are done with the questions, we'll email you both with the results and you can get to making some bedroom guacamole.</p>
                </div>
            </div>
            <!-- CURRENT USER IS COMPLETE -->
            <div class="half__header">
                <div
                    v-show="this.currentUserDone === true && this.allDone === false"
                    class="half__header__inner"
                >
                    <h1>You're done, {{ user_name }}!</h1>
                    <p class="para__slighty__larger">We'll let you know as soon as your partner get theirs done too. Tell {{ partner_name }} to hurry up!</p>
                    <p>In the mean time, feel free to go through and check or redo your answers before {{ partner_name }} finishes.</p>
                    <p>You won't be able to update them once {{ partner_name }} submits theirs!</p>
                </div>
                <div
                    v-show="this.allDone === true"
                    class="half__header__inner"
                >
                    <h1>Hey {{ user_name }}, You're Both Done!</h1>
                    <p>Give us just a momento and we'll email you a link to see your results!</p>
                </div>
            </div>
            <form 
                v-show="this.justQuestions === true"
                class="enter__info__fields"
            >
                <div class="info__section">
                    <h2 class="form__spacer">Types of Questions</h2>
                    <p>What type of questions do you want to see?</p>
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
            <div
                v-show="this.justQuestions === false"
                class="instructions__outer"
            >
                <h3>Intructions For Use:</h3>
                <ul class="instruction__list">
                    <li>Go through the questions below and click one of the available answers:
                        <ul class="instruction__sub__list">
                            <li><span>¡No Way, Jose!</span>Not Interested in doing this</li>
                            <li><span>Open To It...</span>Let's talk about it and see where we meet</li>
                            <li><span>¡Sí por favor!</span>I would love to do this/keep doing this!</li>
                            <li class="instructions__list--nowrap">
                                <img 
                                    :src="getImage('Pepper')[0].img" 
                                    alt="This is Mucho Hot!"
                                    class="pepper__instructions__img"
                                />
                                Click on the pepper to mark things that you think are especially Caliente!
                            </li>
                        </ul>
                    </li>
                    <li class="list__limited__width">Some 'questions' are just statements, mark the answers however it makes sense.</li>
                    <li class="list__limited__width"><span>It's okay if you don't like something!</span> That's the whole point of this!</li>
                    <li class="list__limited__width">You're welcome to skip any items that you don't want to answer, they won't be included at the end.</li>
                    <li class="list__limited__width">At the end you'll only see the things that you both are interested in, or may be interested in!</li>
                </ul>
            </div>
            
            <div 
                v-show="
                    this.allDone === false ||
                    this.onePersonDone === true ||
                    this.justQuestions === true
                "
                :key="this.users.spice_level"
                class="page__questions"
            >
                <CategoryCell 
                    v-for="category in categories"
                    :key="category.name"
                    :category="category"
                    :users="users"
                    :currentUser="currentUser"
                ></CategoryCell>
            </div>
            <div
                v-if="this.justQuestions === false || this.onePersonDone === true"
                class="submission__container"
            >
                <button
                    @click.stop.prevent="setAnswerData()"
                    v-show="this.allDone === false"
                    class="submit__button" 
                >

                    <span v-if="!this.starting && !this.currentUserDone">Submit My Answers!</span>
                    <span v-if="!this.starting && this.currentUserDone">Submit Again!</span>
                    <span v-if="this.starting">Submitting...</span>
                </button>
                <div
                    v-show="this.submittedSuccess === true"
                    class="submitted__success"
                >
                    <div class="submitted__inner">
                        <h2>Questions Submitted Successfully!</h2>
                        <p>As soon as we hear from {{ partner_name }} we'll reach out, quick as a rattlesnake!</p>
                    </div>
                </div>
            </div>
            <div
                v-if="this.justQuestions"
                class="submission__container"
            >
                <nuxt-link 
                    to="/"
                    class="submit__button" 
                >
                    <span>Go Home and Sign Up</span>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            devmode: false,
            starting: false,
            justQuestions: false,
            allDone: false,
            currentUserDone: false,
            onePersonDone: false,
            submittedSuccess: false,
            databaseExists: false,
            users: {
                uuid: "",
                name_1: "Juan",
                equipment_1: "male",
                email_1: "",
                user_1_data_submitted: false,
                name_2: "Maria",
                equipment_2: "female",
                email_2: "",
                user_2_data_submitted: false,
                coupletype: "gay-male",
                spice_level: 4,
                questions: []
            },
            user_name: "",
            partner_name: "",
            currentUser: 0,
            
        }
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pageData: function () {
            return this.$store.state.pages.questions
        },
        categories: function () {
            return this.$store.state.categories
        },
        products: function () {
            return this.$store.state.products
        }
    },
    methods: {
        getImage: function(name) { //GET IMAGE FROM LIST OF SITE IMAGES FROM NETLIFYCMS
            const images = this.pageData.pageimages;
            return images.filter(img => img.imagename === name);
        },
        justShowQuestions: function () { //SET PAGE TO JUST SHOW QUESTIONS, NO SUBMIT BUTTON, ETC.
            this.justQuestions = true;
            this.allDone = false;
            this.onePersonDone = false;
            this.currentUserDone = false;
        },
        
        //INITIAL DATABASE CHECK FUNCTIONS
        checkDatabase: function () { //CHECK DB FOR USER DATA AND EXISTANCE
            const databaseFunction = "/.netlify/functions/check-database";
            const data = {
                uuid: this.users.uuid,
                user: this.user
            };
            return new Promise((resolve, reject) => {
                fetch(databaseFunction, {
                    method: "POST",
                    body: JSON.stringify(data)
                }).then(async response => {
                    return response.json();
                }).then(data => {
                    // console.log(data);
                    if (data.name !== "NotFound") { //CHECKS TO SEE IF DATA OR USER EXISTS IN DATABASE
                        this.databaseExists = true;
                        this.setDataFromDatabase(data);
                    } else { //IF NO USER DATA IN DATABASE THEN JUST QUESTIONS ARE SHOWN
                        this.justShowQuestions();
                    }
                    resolve(data);
                }).catch(err => {
                    reject(err);
                });
            })
        },
        setDataFromDatabase: function (d) { //INITIAL DATA SET WITH DATA FROM FAUNADB
            const dbData = d.data;
            for (let datapoint in dbData) {
                this.users[datapoint] = dbData[datapoint];
            }
            console.log(dbData);
            this.user_name = this.currentUser === 1 ? dbData["name_1"] : dbData["name_2"];
            this.partner_name = this.currentUser === 1 ? dbData["name_2"] : dbData["name_1"];
            this.checkDoneStatuses(dbData);
        },
        checkDoneStatuses: function (dbData) {
            if (
                (this.currentUser === 1 && dbData.user_1_data_submitted && !dbData.user_2_data_submitted) ||
                (this.currentUser === 2 && dbData.user_2_data_submitted && !dbData.user_1_data_submitted)
            ) {
                this.onePersonDone = true;
                this.currentUserDone = true;
                this.alreadyAnswered();
            }
            if (dbData["user_1_data_submitted"] && dbData["user_2_data_submitted"]) {
                this.currentUserDone = false;
                this.onePersonDone = false;
                this.allDone = true;
                this.$router.push("/results?uuid=" + this.users.uuid + "-" + this.currentUser);
            }
        },
        alreadyAnswered: function () {
            this.users.questions.forEach(dq => {
                let textQuestion = dq.question;
                let dataAnswers = dq.answers[this.currentUser];
                for (let i = 0; i < this.categories.length; i++) {
                    let category = this.categories[i];
                    for (let j = 0; j < category.questions.length; j++) {
                        let catQuestion = category.questions[j];
                        if (catQuestion.question === textQuestion) {
                            let checkedObj = {
                                category: parseInt(i),
                                question: parseInt(j),
                                answer: parseInt(dataAnswers.answer),
                                superhot: dataAnswers.superhot,
                                singleout: parseInt(dataAnswers.singleout)
                            }
                            this.$store.commit("checkedQuestion", checkedObj);
                        }
                    }
                }
            });
        },

        //WHEN USER CLICKS ON SUBMIT BUTTON
        setAnswerData: function() { //COMBINE ANSWER DATA
            if (this.databaseExists) {
                let questionsObj = {};
                let questionsArr = [];
                let radios = document.querySelector(".page__questions").querySelectorAll("input[type=radio]:checked.question__answer__radio");
                this.starting = true;
                if (radios.length > 0) {
                    radios.forEach((radio, index) => {
                        let question = radio.getAttribute("name");
                        let answer = parseInt(radio.getAttribute("value"));
                        let hotnessCheck = radio.closest(".qa__cell__inner").querySelector("input[name='muchohot']").checked;
                        let category = radio.closest(".category__cell").getAttribute("data-category-type");
                        if (answer !== 0) {
                            let singleOut = parseInt(this.checkSingledOut(radio));
                            let alreadyExists = this.users.questions.filter(ques => {
                                return ques.question === question
                            })[0];
                            if (alreadyExists) {
                                alreadyExists.answers[this.currentUser] = {
                                    "answer": answer,
                                    "superhot": hotnessCheck,
                                    "singleout": singleOut
                                }
                            } else {
                                let quesObj = {
                                    "category": category,
                                    "question": question,
                                    answers: {
                                        [this.currentUser]: {
                                            "answer": answer,
                                            "superhot": hotnessCheck,
                                            "singleout": singleOut
                                        }
                                    }
                                }
                                this.users.questions.push(quesObj);
                            }
                        }
                    });
                }
                this.setUserSubmittedBool();
                this.sendQuestionsToDB();
            }
        },
        checkSingledOut: function (radio) { //CHECK IF CURRENT USER ONLY WANTS TO DO THING WITH SPECIFIC PARTNER
            let singleDiv = radio.closest(".qa__cell__inner").querySelector(".question__answer__both__partners");
            if (singleDiv) {
                let singleOutCheckboxes = singleDiv.querySelectorAll('input:checked');
                if (singleOutCheckboxes.length === 1) {
                    // console.log(singleOutCheckboxes[0].value);
                    return singleOutCheckboxes[0].value;
                }
            }
            return 0;
        },
        setUserSubmittedBool: function () { //SET STATUS OF IF USER HAS COMPLETED QUESTIONS BEFORE
            if (this.currentUser === 1) {
                this.users.user_1_data_submitted = true;
            } else if (this.currentUser === 2) {
                this.users.user_2_data_submitted = true;
            }
        },
        sendQuestionsToDB: function () { //SEND QUESTION DATA TO DATABASE
            const userDataObj = JSON.parse(JSON.stringify(this.users));
            const questionsFunction = "/.netlify/functions/send-questions";
            return new Promise((resolve, reject) => {
                fetch(questionsFunction, {
                    method: "POST",
                    body: JSON.stringify(userDataObj)
                }).then(async response => {
                    return response.json();
                }).then(data => {
                    this.submittedSuccess = true;
                    resolve(data);
                    if (this.users.user_1_data_submitted && this.users.user_2_data_submitted) {
                        console.info('Database successfully submitted, both have completed, and Final Email Sending Now');
                        this.sendFinalEmail().then(response => {
                            const emailReturn = response.json();
                            if (Number(response.status) !== 200) {
                                console.error('Error sending emails');
                            } else {
                                this.$router.push("/results?uuid=" + this.users.uuid + "-" + this.currentUser);
                            }
                        });
                        
                    }
                }).catch(err => {
                    reject(err);
                });
            })
        },
        sendFinalEmail: function () {
            let userDataObj = JSON.parse(JSON.stringify(this.users));
            const finalEmailURL = "/.netlify/functions/send-completed-email"
            return new Promise((resolve, reject) => {
                fetch(finalEmailURL, {
                    method: "POST",
                    body: JSON.stringify(userDataObj)
                }).then(response => {
                    resolve(response);
                }).catch(err => {
                    reject(err);
                });
            })
        }
        
    },
    mounted() {
        if (this.devmode) {
            this.justQuestions = false;
            this.users.spice_level = 10;
        }
        if (this.$route.query && this.$route.query.uuid) { //IF THERE IS DATA IN THE QUERY FIELDS OF THE URL TO SHOW USER DATA
            this.users.uuid = this.$route.query.uuid.split("-")[0];
            this.currentUser = parseInt(this.$route.query.uuid.split("-")[1]);
            this.checkDatabase(); //CALL DATABSE WITH URL INFO
        } else {
            this.justShowQuestions(); //JUST SHOW QUESTIONS - PEOPLE NOT 'LOGGED IN' THAT JUST WANT TO SEE THE QUESTIONS
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
.questions {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    min-height: 100vh;
}
.questions__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
}
.instructions__outer {
    max-width: 860px;
    margin: 20px auto 0;
    background: var(--blue);
    padding: 20px 0;
    color: #FFF;
}
.instruction__list {
    margin: 20px 0 0;
    list-style: none;
    font-size: 1.2em;
    padding: 0;
    text-align: center;
}
.instruction__sub__list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    list-style: none;
    padding: 0;
}
.instruction__sub__list li {
    font-size: .8em;
    width: 46%;
    text-align: center;
    margin: 6px 10px;
    background-color: var(--green);
    padding: 2px 14px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    min-height: 115px;
    /* color: var(--green); */
}
.list__limited__width {
    max-width: 760px;
    margin: 20px auto;
}
.instruction__sub__list li span {
    font-weight: 700;
}
.pepper__instructions__img {
    display: inline-block;
    max-width: 20px;
    max-height: 40px;
    align-self: center;
    margin-bottom: 3px;
}
.pepper__instructions__img {
    animation: instruction__shaker 3s;
    animation-iteration-count: infinite;
    transform: scale(1);
    filter: grayscale(.6);
}
@keyframes instruction__shaker {
    0% {
        transform: scale(1);
        filter: grayscale(.6);
    }
    50% {
        transform: scale(1.10);
        filter: grayscale(0);
    }
    100% {
        transform: scale(1);
        filter: grayscale(.6);
    }
}
li.instructions__list--nowrap {
    flex-wrap: nowrap;
}
.submission__container {
    position: sticky;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 3;
}
.submitted__success {
    background: #FFF;
    padding: 6px;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 730px) {
    .half__header__inner {
        padding: 70px 20px 20px;
    }
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 550px) {
    .instructions__outer {
        max-width: 100%;
        margin: 20px 0 0;
        background: var(--blue);
        padding: 20px 8px;
        color: #FFF;
    }
    .instruction__sub__list li {
        width: 100%;
        min-height: 0;
    }
}
</style>
