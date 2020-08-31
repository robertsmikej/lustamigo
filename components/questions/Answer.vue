<template>
    <div class="qa__cell__inner answer__cell__inner">
        <div class="qa__cell__inner--1">
            <div class="qa__text__cell answer__text__cell">
                <p v-if="question.question !== null">{{ this.initializeQuestion(question) }}</p>
                <div class="qa__text__explain__icon" @click="toggleExplainButton" v-if="question.question_explanation !== null">
                    <span>?</span>
                </div>
            </div>
            <div class="answers__cell">
                <div class="question__answer" v-if="response.user1.value !== null" :data-response-value="response.user1.value">
                    <p>{{ response.user1.value }}</p>
                    <img v-if="response.user1.hotness" src="https://www.lustamigo.com/directus/public/uploads/_/originals/Mexi-cons-red-hot-pepper-trimmed.png" alt="This Question Was Hot!" class="answer__hot__img">
                </div>
                <div class="question__answer" v-if="response.user2.value !== null" :data-response-value="response.user2.value">
                    <p>{{ response.user2.value }}</p>
                    <img v-if="response.user2.hotness" src="https://www.lustamigo.com/directus/public/uploads/_/originals/Mexi-cons-red-hot-pepper-trimmed.png" alt="This Question Was Hot!" class="answer__hot__img">
                </div>
            </div>
        </div>
        <div class="qa__text__explain__text" v-if="question.question_explanation !== null">
            <div class="qa__text__explain__text__inner">
                <p>{{ question.question_explanation }}</p>
            </div>
            <div class="explain__close submit__button" @click="toggleExplainClose">Close</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        question: Object,
        name_1: String,
        name_2: String,
        gender_1: String,
        gender_2: String,
        response: Object,
        Answer: Object,
        user: Number,
        userDone: Number,
        checked: Object,
        currentUserDone: Boolean
    },
    methods: {
        makeLegible: function (text) {
            return text.replace(/_/g, " ");
        },
        toggleExplainButton: function (event) {
            let change = event.target.parentElement.parentElement.parentElement.parentElement.querySelector(".qa__text__explain__text");
            if (change) {
                if (!change.classList.contains("qa__text__explain__text--show")) {
                    change.classList.add("qa__text__explain__text--show");
                } else {
                    change.classList.remove("qa__text__explain__text--show");
                }
            }
        },
        toggleExplainClose: function () {
            let change = event.target.parentElement.parentElement.querySelector(".qa__text__explain__text");
            change.classList.remove("qa__text__explain__text--show");
        },
        initializeQuestion: function (q) {
            let ques = q.question;
            if (q.question.toLowerCase().indexOf("female") >= 0 || q.question.toLowerCase().indexOf("male") >= 0) {
                if (this.gender_1.toLowerCase() === "male") {
                    let mapper = {
                        female: this.name_2,
                        male: this.name_1
                    };
                    ques = this.replaceAll(ques, mapper);
                } else if (this.gender_1.toLowerCase() === "female") {
                    let mapper = {
                        female: this.name_1,
                        male: this.name_2
                    };
                    ques = this.replaceAll(ques, mapper);
                }
            }
            if (q.question.toLowerCase().indexOf("partner") >= 0 || q.question.toLowerCase().indexOf("user") >= 0) {
                let mapper = {
                    partner: this.name_2,
                    user: this.name_1
                };
                ques = this.replaceAll(ques, mapper);
            }
            return ques;
        },
        replaceAll: function (str, obj) {
            var re = new RegExp(Object.keys(obj).join("|"),"gi");
            return str.replace(re, function(matched){
                return obj[matched.toLowerCase()];
            });
        }
    }
}
</script>

<style>
    body .answer__cell:nth-of-type(even) {
        background-color: var(--light-blue2);
        color: #FFF;
    }
    .answer__text__cell {
        flex: 1 1 70%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: flex-start;
    }
    .answer__text__cell p {
        text-align: left;
        align-self: center;
        text-transform: capitalize;
    }
    .answers__cell {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: flex-start;
        justify-content: center;
        flex: 0 1 auto;
        border-left: 1px solid var(--gun-grey);
    }
    .answer__key__cell {
        position: sticky;
        top: 148px;
        background-color: var(--light-grey);
        z-index: 20;
        border: 1px solid var(--gun-grey);
    }
    body .answer__key__names__cell {
        display: flex;
        flex-direction: row;
        align-content: flex-start;
        justify-content: space-around;
        margin-left: auto;
        width: 280px;
        padding-top: 2px;
        border-left: none;
        border-right: none;
    }
    .answer__key__names__cell h5 {
        width: 100%;
    }
    .answer__cell label {
        height: 100%;
        width: 100%;
        padding: 0 10px;
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        justify-content: center;
        align-self: center;
        font-size: 1.2em;
        cursor: pointer;
        transition: background-color .5s;
    }
    .answer__cell label {
        cursor: initial;
    }
    .answer__cell label:hover {
        background: initial;
        color: initial;  
    }
    [data-response-value="interested"] {
        background-color: var(--green);
    }
    [data-response-value="maybe"] {
        background-color: var(--light-orange);
    }
    .answer__cell .answers__cell p {
        color: #FFF;
    }
    .answer__cell:nth-of-type(odd) .question__answer:nth-of-type(2),
    .answer__cell:nth-of-type(even) .question__answer:nth-of-type(2) {
        border-right: none;
    }
    .answer__cell:nth-of-type(even) {
        border: none;
        border-left: 1px solid var(--gun-grey);
        border-right: 1px solid var(--gun-grey);
    }
    .answer__cell .qa__text__explain__icon {
        background-color: var(--green);
    }
    .answer__hot__img {
        max-height: 30px;
        margin-left: 7px;
        margin-right: -25px;
        margin-top: -2px;
        animation: spicyanswershaker 1.2s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-direction: alternate;
    }

    @keyframes spicyanswershaker {
        0% {
            transform: rotate(0);
        }
        10% {
            transform: rotate(20deg);
        }
        20% {
            transform: rotate(-20deg);
        }
        30% {
            transform: rotate(20deg);
        }
        40% {
            transform: rotate(0);
        }
        50% {
            transform: rotate(0);
        }
        60% {
            transform: rotate(0);
        }
        70% {
            transform: rotate(0);
        }
        80% {
            transform: rotate(0);
        }
        90% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(0);
        }
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 730px) {
        .answer__key__cell {
            top: 78px;
        }
        .answer__cell .qa__text__cell p {
            width: auto;
            flex: 1;
            text-align: center;
        }
        .answer__key__names__cell {
            width: 100%;
        }
        .answers__cell {
            border-bottom: 1px solid var(--gun-grey);
        }
    }
    
</style>
