<template>
    <div class="category__cell">
        <div>
            <div class="category__img__container">
                <img :src="img.data.full_url" :alt="header" class="category__img">
            </div>
            <h2 class="category__name">{{ header }}</h2>
            <p class="category__para">{{ para }}</p>
        </div>
        <div class="category__questions" v-show="alldone === false">
            <div v-if="questionType.toLowerCase() === 'spicy'" class="question__cell__outer">
                <div v-for="(question, index) in questions" :key="index" class="qa__cell question__cell">
                    <Question v-if="question.status === 'published'" :key="index" :question="question" :name_1="name_1" :name_2="name_2" :gender_1="gender_1" :gender_2="gender_2" :user="user" :userDone="userDone" :currentUserDone="currentUserDone" :checked="userDoneQuestions(question)"></Question>
                </div>
            </div>
            <div v-else></div>
            <div v-if="questionType.toLowerCase() === 'tame'" class="question__cell__outer">
                <div v-for="(question, index) in basicQuestions" :key="index" class="qa__cell question__cell">
                    <Question v-if="question.status === 'published'" :key="index" :question="question" :name_1="name_1" :name_2="name_2" :gender_1="gender_1" :gender_2="gender_2" :user="user" :userDone="userDone" :currentUserDone="currentUserDone" :checked="userDoneQuestions(question)"></Question>
                </div>
            </div>
            <div v-else></div>
        </div>
        <div class="category__questions" v-if="alldone">
            <div class="answer__key__cell answer__cell qa__cell">
                <div class="answer__text__cell"></div>
                <div class="answer__key__names__cell answers__cell">
                    <h5>{{ name_1 }}</h5>
                    <h5>{{ name_2 }}</h5>
                </div>
            </div>
            <div v-for="(question, index) in questions" :key="index" >
                <!-- COULD BE V-SHOW - CHANGE IF NEEDED/IT BREAKS -->
                <div v-if="getAnswer(question)" style="width:100%;" class="qa__cell answer__cell">
                    <Answer :key="index" :question="question" :name_1="name_1" :name_2="name_2" :gender_1="gender_1" :gender_2="gender_2" :response="getAnswer(question)" :user="user" :userDone="userDone" :currentUserDone="currentUserDone" :checked="userDoneQuestions(question)"/>
                </div>
            </div>
        </div>
        <div v-else></div>
        <!-- <div v-if="products">
            <div class="product__cells__outer" v-if="this.checkObj(products)">
                <h5>Here are some of our favorite toys in this category!</h5>
                <Products :products="products"/>
            </div>
        </div> -->
        <div v-else></div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            questionsAnswered: {}
        }
    },
    props: {
        header: String,
        para: String,
        img: Object,
        questions: Object,
        name_1: String,
        name_2: String,
        gender_1: String,
        gender_2: String,
        response_1: String,
        response_2: String,
        alldone: Boolean,
        response: Object,
        products: Object,
        questionType: String,
        user: Number,
        userDone: Number,
        currentUserDone: Boolean
    },
    computed: {
        basicQuestions: function () {
            let basics = {};
            let ques = this.questions;
            for (let q in ques) {
                let thisques = this.questions[q];
                let type = thisques.question_type;
                if (type == "regular" || type == "tame") {
                    basics[q] = thisques;
                }
            }
            return basics;
        }
    },
    methods: {
        checkObj: function (obj) {
            if (obj) {
                return Object.entries(obj).length
            }
        },
        getAnswer: function (ques) {
            let quest = ques.question.toLowerCase().replace(/ /g, "_");
            if (this.response) {
                let respkeys = Object.keys(this.response);
                if (respkeys.length > 0) {
                    if (respkeys.indexOf(quest) >= 0) {
                        return this.response[quest];
                    }
                }
            }
            return false;
        },
        userDoneQuestions: function (q) {
            if (this.currentUserDone) {
                let response = {};
                if (this.user == 1) {
                    response = JSON.parse(this.response_1);
                } else if (this.user == 2) {
                    response = JSON.parse(this.response_2);
                }
                let ques = q.question.toLowerCase().replace(/ /g, "_");
                if (ques in response) {
                    if (this.user == 1) {
                        return {
                            answer: response[ques].user1.value,
                            hotness: response[ques].user1.hotness
                        }
                    } else {
                        return {
                            answer: response[ques].user2.value,
                            hotness: response[ques].user2.hotness
                        }
                    }
                }
            }
        }
    }
}
</script>


<style>
    .category__cell {
        max-width: 900px;
        width: 100%;
        margin: 10px auto 40px;
        padding: 20px 20px 60px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: flex-start;
        justify-content: center;
        text-align: center;
    }
    .category__cell__outer:nth-of-type(even) {
        width: 100%;
        margin: 0 auto;
        background: linear-gradient(to bottom, #FFF,var(--aqua), #FFF);
    }
    .category__img {
        max-width: 200px;
    }
    .category__name {
        margin-top: 0;
        padding: 0 10px;
    }
    .category__para {
        margin-top: 0;
        padding: 0 10px;
    }
    .category__questions {
        margin: 10px 0;
        background-color: #FFF;
        border-top: 1px solid var(--gun-grey);
    }
    .product__cells__outer {
        margin: 30px auto 0;
        width: 100%;
    }    
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 730px) {
        .category__cell {
            padding: 0;
            margin-top: 0;
        }
        .product__cells__outer {
            margin: 10px auto 0;
        }    
    }
</style>
