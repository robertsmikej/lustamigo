<template>
    <div class="container">
        <div class="questions__inner">
            <div
                v-show="this.allDone === false"
                class="half__header"
            >
                <div
                    v-show="this.thisPersonDone === false && this.justQuestions === false"
                    class="half__header__inner"
                >
                    <h1>Let's Do This, {{ users.name_1 }}!</h1>
                    <p>As soon as you and {{ users.name_2 }} are done with the questions, we'll email you both with the results and you can get to making some bedroom guacamole.</p>
                </div>
                <div
                    v-if="this.justQuestions === true"
                    class="half__header__inner"
                >
                    <h1>Just Want To Peek At The Questions?</h1>
                    <p>That's awesome! Be sure to sign up to take the quiz with your partner, you'll get better use out of the Lust Amigo's magic that way. Have fun!</p>
                </div>
            </div>
            <div class="half__header">
                <div
                    v-show="this.thisPersonDone === true"
                    class="half__header__inner"
                >
                    <h1>You're already done, {{ users.name_1 }}!</h1>
                    <p class="para__slighty__larger">We'll let you know as soon as your partner get theirs done. Tell {{ users.name_2 }} to hurry up!</p>
                    <p>In the mean time, feel free to go through and redo your answers before {{ users.name_2 }} finishes.</p>
                    <p><u>Note: If you decide to change your answers and your partner finishes before you are done revising, they will see your first answers until they are updated.</u></p>
                </div>
                <div
                    v-show="this.allDone === true"
                    class="half__header__inner"
                >
                    <h1>{{ users.name_1 }}, You're Both Already Done!</h1>
                    <p>Give us just a momento to get your results and we'll send you to the right page.</p>
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
                v-show="this.allDone === false || this.onePersonDone === true || this.justQuestions === true"
                :key="this.users.spice_level"
            >
                <CategoryCell 
                    v-for="category in categories"
                    :key="category.name"
                    :category="category"
                    :users="users"
                ></CategoryCell>
            </div>
            <div
                v-show="this.justQuestions === false || this.onePersonDone === true"
                class="submission__container"
            >
                <button
                    @click.stop.prevent="setAnswerData()"
                    class="submit__button" 
                >
                    <span v-if="this.starting === false">Submit My Answers!</span>
                    <span v-if="this.starting">Submitting...</span>
                </button>
                <div
                    v-show="this.submittedSuccess === true"
                    class="submitted__success"
                >
                    <div class="submitted__inner">
                        <h2>Questions Submitted Successfully!</h2>
                        <p>As soon as we hear from {{ users.name_2 }} we'll reach out, quick as a rattlesnake!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            devmode: true,
            starting: false,
            justQuestions: false,
            allDone: false,
            onePersonDone: false,
            thisPersonDone: false,
            submittedSuccess: false,
            users: {
                name_1: "Juan",
                equipment_1: "male",
                email_1: "",
                user_1_responses: {},
                name_2: "Maria",
                equipment_2: "female",
                email_2: "",
                user_2_responses: {},
                coupletype: "gay-male",
                spice_level: 4
            },
            user: 0,
            userDone: 0
        }
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        pageData: function () {
            return this.$store.state.pages.index
        },
        categories: function () {
            return this.$store.state.categories
        }
    },
    methods: {
        getImage: function(name) {
            const images = this.pageData.pageimages;
            return images.filter(img => img.imagename === name);
        },
        setAnswerData: function() { //COMBINE ANSWER DATA AND SEND TO DIRECTUS
            let send = {};
            let radios = document.querySelectorAll("input[type=radio]:checked");
            let th = this;
            this.starting = true;
            if (radios.length > 0) {
                radios.forEach(function (radio) {
                    let question = radio.getAttribute("name");
                    let answer = radio.getAttribute("value");
                    let checkbox = radio.parentNode.parentNode.parentNode.querySelector("input[type=checkbox]");
                    let hotnessChecked = null;
                    if (answer.toLowerCase().indexOf("not_interested") === -1) {
                        if (checkbox.checked && answer.toLowerCase().indexOf("interested") >= 0) {
                            hotnessChecked = true;
                        }
                        if (th.user == 1) {
                            send[question] = {
                                "user1": {
                                    "user": th.user,
                                    "question": question,
                                    "value": answer,
                                    "hotness": hotnessChecked,
                                }
                            }
                        } else if (th.user == 2) {
                            send[question] = {
                                "user2" : {
                                    "user": th.user,
                                    "question": question,
                                    "value": answer,
                                    "hotness": hotnessChecked
                                }
                            }
                        }
                    }
                });
            }
        },
        currentUserDone: function (question) {
            this.user == this.userDone ? true : false;
        }
    },
    mounted() {
        if (this.devmode) {
            this.justQuestions = false;
            this.users.spice_level = 10;
        }
    },
    head () {
        return {
            title: "Lust Amigo Questions | Sexy Quiz To Bring You Closer With Your Partner",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: "Answer some fun questions about your sexy fantasies and become closer with your partner.  The Lust Amigo is an fun, quick way to see what sort of kinks, and desires you have in common with your partner.",
                    hid: 'robots', name: 'robots', content: 'index, follow'
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
    margin: 10px 10px;
    background-color: var(--green);
    padding: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    min-height: 125px;
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
