<template>
    <div class="category__cell">
        <div>
            <div class="category__img__container">
                <img 
                    :src="category.img" 
                    :alt="category.name + ' Logo'"
                    class="category__img"
                >
            </div>
            <h2 class="category__name">{{ category.name }}</h2>
            <p class="category__para">{{ category.categorydescription }}</p>
        </div>
        <div class="category__questions">
            <div class="question__cell__outer">
                <div 
                    v-for="question in filteredQuestions" 
                    :key="question.question"
                    class="qa__cell question__cell"
                >
                    <Question 
                        v-if="question.status" 
                        :question="question" 
                        :users="users" 
                        :userDone="userDone" 
                        :currentUserDone="currentUserDone" 
                        :checked="userDoneQuestions(question)"
                    >
                    </Question>
                </div>
            </div>
        </div>
        <div
            v-if="alldone"
            class="category__questions"
        >
            <div class="answer__key__cell answer__cell qa__cell">
                <div class="answer__text__cell"></div>
                <div class="answer__key__names__cell answers__cell">
                    <h5>{{ users.name_1 }}</h5>
                    <h5>{{ users.name_2 }}</h5>
                </div>
            </div>
            <div 
                v-for="question in questions"
                :key="question.question" 
            >
                <div 
                    v-if="getAnswer(question)"
                    style="width:100%;"
                    class="qa__cell answer__cell"
                >
                    <Answer
                        :response="getAnswer(question)" 
                        :question="question"
                        :users="users" 
                        :userDone="userDone"
                        :currentUserDone="currentUserDone"
                        :checked="userDoneQuestions(question)"
                    />
                </div>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    data() {
        return {
            questionsAnswered: {},
            
        }
    },
    props: {
        category: Object,
        users: Object,
        alldone: Boolean,
        userDone: Number,
        currentUserDone: Boolean
    },
    computed: {
        filteredQuestions: function () {
            const catQuestions = this.category.questions;
            let newQuestionsArr = [];
            const coupletype = this.users.coupletype;
            const userSpiciness = this.users.spice_level;
            let orientation = catQuestions.filter(function (question) {
                if (question.typeof && question.typeof.includes(coupletype)) {
                    return question;
                } else if (!question.typeof) {
                    return question;
                }
            });


            let spiciness = orientation.filter(function (question) {
                if (parseInt(question.spicelevel) <= parseInt(userSpiciness)) {
                    return question; 
                }
            });
            return spiciness;
        },
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
        getSpicy: function (questionlevel, userlevel) {
            
        },
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
        margin: 10px auto 20px;
        padding: 20px 20px 30px;
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
