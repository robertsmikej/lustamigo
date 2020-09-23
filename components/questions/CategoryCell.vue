<template>
    <div 
        :data-category-type="category.name"
        v-if="category.questions.length > 0"
        class="category__cell"
    >
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
        <div
            v-if="!alldone"
            class="category__questions"
        >
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
                        :currentUser="currentUser"
                        :data-question="question.question"
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
                v-for="answer in category.questions"
                :key="answer.question"
                class="qa__cell answer__container__cell"
            >
                <Answer
                    :answer="answer" 
                    :users="users" 
                    :userDone="userDone"
                    :currentUser="currentUser"
                    :data-answer="answer.question"
                />
            </div>
        </div>
        <CategoryAds
            :category="category"
            :products="products"
        />
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
        currentUser: Number,
        responseData: Object
    },
    computed: {
        products: function () {
            return this.$store.state.products
        },
        filteredQuestions: function () {
            const catQuestions = this.category.questions;
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
                // console.log(question.question + " - " + question.spicelevel)
                if (parseInt(question.spicelevel) <= parseInt(userSpiciness)) {
                    return question; 
                }
            });
            return spiciness;
        }
    },
    methods: {

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
        /* border-top: 1px solid var(--gun-grey); */
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
        .category__img {
            max-width: 180px;
        }
        .product__cells__outer {
            margin: 10px auto 0;
        }    
    }
</style>
