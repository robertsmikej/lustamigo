<template>
    <div class="qa__cell__inner">
        <div class="qa__text__cell">
            <p 
                v-if="question.question"
            >
                {{ question.question }}
            </p>
            <div 
                v-if="question.description"
                @click="toggleExplainButton" 
                class="qa__text__explain__icon"
            >
                <span>?</span>
            </div>
            <div 
                :data-checked="checkHotness(checked)"
                class="question__special"
            >
                <input 
                    :id="question.question + '-checked'"
                    :checked="checkHotness(checked)"
                    type="checkbox" 
                    name="muchohot" 
                >
                <label
                    :for="question.question + '-checked'"
                    class="special__icon__label"
                >
                    <img 
                        :src="getImage('Pepper')[0].img"
                        alt="This is Mucho Hot!" 
                        class="special__icon"
                    >
                </label>
            </div>
        </div>
        <div
            :data-checked="checkAnswer(checked)"
            class="question__answer__cell"
        >
            <div class="question__answer__inner">
                <div class="question__answer">
                    <input 
                        :id="question.question + '-notinterested'"
                        :name="question.question"
                        :checked="checkAnswer(checked) == 'not_interested'"
                        type="radio"
                        value="not_interested"
                    >
                    <label
                        :for="question.question + '-notinterested'"
                    >
                        ¡No Way, Jose!
                    </label>
                </div>
                <div class="question__answer">
                    <input
                        :id="question.question + '-maybe'"
                        :name="question.question"
                        :checked="checkAnswer(checked) == 'maybe'"
                        type="radio"
                        value="maybe"
                    >
                    <label 
                        :for="question.question + '-maybe'"
                    >
                        Open To It...
                    </label>
                </div>
                <div class="question__answer">
                    <input 
                        v-if="example"
                        :name="question.question"
                        :id="question.question + '-interested'" 
                        type="radio"
                        value="interested"
                        checked
                    >
                    <input
                        v-if="!example"
                        :name="question.question"
                        :id="question.question + '-interested'"
                        :checked="checkAnswer(checked) == 'interested'"
                        type="radio"
                        value="interested"
                    >
                    <label 
                        :for="question.question + '-interested'"
                    >
                        ¡Sí por favor!
                    </label>
                </div>
            </div>
            <div
                v-if="question.bothpartners" 
                class="question__answer__both__partners"
            >
                <p>I Only Want To Do This To: </p>
                <div class="question__answer question__answer__partner__cell">
                    <input 
                        :id="question.question + users.name_1"
                        type="checkbox"
                        :value="users.name_1"
                    >
                    <label
                        :for="question.question + users.name_1"
                    >
                        {{ users.name_1 }}
                    </label>
                </div>
                <div class="question__answer question__answer__partner__cell">
                    <input
                        :id="question.question + users.name_2"
                        type="checkbox"
                        :value="users.name_2"
                    >
                    <label 
                        :for="question.question + users.name_2"
                    >
                        {{ users.name_2 }}
                    </label>
                </div>
            </div>
        </div>
        <div
            v-if="question.description"
            class="qa__text__explain__text"
        >
            <div class="qa__text__explain__text__inner">
                <p>{{ question.description }}</p>
            </div>
            <div
                @click="toggleExplainClose"
                class="explain__close submit__button"
            >Close</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        question: Object,
        example: Boolean,
        users: Object,
        userDone: Number,
        checked: Object,
        currentUserDone: Boolean
    },
    computed: {
        pageData: function () {
            return this.$store.state.pages.index
        }
    },
    methods: {
        getImage: function(name) {
            const images = this.pageData.pageimages;
            return images.filter(img => img.imagename === name);
        },
        checkAnswer: function (answer) {
            if (this.currentUserDone) {
                if (answer) {
                    if (answer.answer == "interested") {
                        return "interested"
                    } else if (answer.answer == "maybe") {
                        return "maybe"
                    }
                }
                return "not_interested";
            }
        },
        checkHotness: function (hotness) {
            return hotness ? hotness.hotness : false;
        },
        toggleExplainButton: function (event) {
            let change = event.target.closest(".qa__cell__inner").querySelector(".qa__text__explain__text");
            if (change) {
                if (!change.classList.contains("qa__text__explain__text--show")) {
                    change.classList.add("qa__text__explain__text--show");
                } else {
                    change.classList.remove("qa__text__explain__text--show");
                }
            }
        },
        toggleExplainClose: function () {
            let change = event.target.closest(".qa__cell__inner").querySelector(".qa__text__explain__text");
            change.classList.remove("qa__text__explain__text--show");
        },
        initializeQuestion: function (q) {
            let ques = q.question;
            // if (q.question.toLowerCase().indexOf("partner") >= 0 || q.question.toLowerCase().indexOf("user") >= 0) {
            //     let mapper = {
            //         partner: this.users.name_2,
            //         user: this.users.name_1
            //     };
            //     ques = this.replaceAll(ques, mapper);
            // }
            return ques;
        },
        replaceAll: function (str, obj) {
            var re = new RegExp(Object.keys(obj).join("|"),"gi");
            return str.replace(re, function(matched){
                return obj[matched.toLowerCase()];
            });
        }
    },
    mounted() {
        if (this.checked) {
            if (this.checked === "interested") {
                this.$el.querySelector("input[value='interested']").checked = true;
            } else if (this.checked === "maybe") {
                this.$el.querySelector("input[value='maybe']").checked = true;
            } else if (this.checked === "not_interested") {
                this.$el.querySelector("input[value='not_interested']").checked = true;
            }
        }
    }
}
</script>

<style>
.qa__cell {
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: center;
    max-width: 1100px;
}
.qa__cell {
    border: 1px solid var(--gun-grey);
    border-top: none;
}
.qa__cell:nth-last-of-type(1) {
    border-bottom: 1px solid var(--gun-grey);
}
.qa__cell:nth-of-type(even) {
    background-color: var(--question-color);
    color: #FFF;
}
.qa__cell input[type="radio"], .qa__cell input[type="checkbox"] {
    display: none;
}
.qa__cell__inner {
    width: 100%;
    margin: 0;
    padding: 0 0 0 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
}
.qa__text__cell {
    flex: 1 1 460px;
    position: relative;
    padding: 0 0 0 10px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: flex-start;
}
.qa__text__cell p {
    text-align: left;
    text-transform: capitalize;
    align-self: center;
}
.qa__text__explain__icon {
    align-self: center;
    height: 18px;
    min-height: 18px;
    width: 18px;
    min-width: 18px;
    background: var(--blue);
    border-radius: 50%;
    color: #FFF;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    font-weight: 500;
    font-size: .9em;
    line-height: .9em;
    padding: 4px 0 0;
    margin-left: 8px;
    margin-top: -2px;
}
.qa__text__explain__icon span {
    align-self: center;
    display: block;
}
.question__answer__cell {
    flex: 0 1 380px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    border-left: 1px solid var(--gun-grey);
}
.question__answer__inner {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}
.question__answer__both__partners {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: space-around;
    border-top: 1px solid var(--gun-grey);

}
.question__answer  {
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
}
.question__answer p {
    text-transform: capitalize;
    font-size: 1.3em;
}
.question__answer label {
    width: 100%;
    height: 100%;
    padding: 8px;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
    align-self: center;
    font-size: 1.2em;
    cursor: pointer;
    transition: background-color .5s;
    white-space: nowrap;
}
.question__answer__both__partners {
    
}


.qa__cell:nth-of-type(odd) .question__answer:nth-of-type(2) {
    border-left: 1px solid var(--gun-grey);
    border-right: 1px solid var(--gun-grey);
}
.qa__cell:nth-of-type(even) .question__answer:nth-of-type(2) {
    border-left: 1px solid var(--gun-grey);
    border-right: 1px solid var(--gun-grey);
}
.qa__cell .question__answer__both__partners .question__answer:nth-of-type(2) {
    border: none;
}

.question__answer label:hover {
    background: var(--light-blue2);
    color: #FFF;       
}

.qa__cell:nth-of-type(odd) label:hover {
    color: #FFF;
}
.question__answer__both__partners label:hover {
    background: inherit;
    color: inherit;     
}
.qa__cell:nth-of-type(odd) .question__answer__both__partners label:hover {
    color: var(--gun-grey);     
}

.qa__cell input[type="radio"] {
    display: none;
}
.question__answer__partner__cell input[type="checkbox"] {
    display: block;
}
.question__answer__cell input[type="radio"]:checked + label {
    background: var(--dark-orange);
    color: white;
}
.question__answer__cell input[type="radio"]:checked > label {
    background: var(--red);
    color: white;
}

.question__answer__partner__cell {
    flex: 0 1 auto;
}
.question__answer__both__partners p {
    font-size: 1em;
    line-height: 1em;
    padding: 2px 4px 0;
}

.question__special {
    width: 50px;
    min-width: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    /* background: #FFF; */
    position: relative;
    align-self: center;
    margin-left: auto;
    height: 100%;
    cursor: pointer;
}
.special__icon__label {
    height: 100%;
    cursor: pointer;
    transition: all .6s;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 0;
}
.special__icon {
    filter: grayscale(0.5);
    transform: rotate(0) scale(1);
    transform-origin: center center;
    width: 100%;
    max-height: 34px;
    object-fit: contain;
}
.qa__cell input[type="checkbox"]:checked + label img {
    animation: spicyshaker .9s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    animation-direction: normal;
}
@keyframes spicyshaker {
    0% {
        -webkit-transform: rotate(0) scale(1);
        -webkit-filter: grayscale(.5);
        transform: rotate(0) scale(1);
        filter: grayscale(.5);
    }
    10% {
        -webkit-transform: rotate(15deg) scale(1.04);
        -webkit-filter: grayscale(.5);
        transform: rotate(15deg) scale(1.04);
        filter: grayscale(.5);
    }
    20% {
        -webkit-transform: rotate(-15deg) scale(1.06);
        -webkit-filter: grayscale(.45);
        transform: rotate(-15deg) scale(1.06);
        filter: grayscale(.45);
    }
    30% {
        -webkit-transform: rotate(15deg) scale(1.06);
        -webkit-filter: grayscale(.4);
        transform: rotate(15deg) scale(1.06);
        filter: grayscale(.4);
    }
    40% {
        -webkit-transform: rotate(-15deg) scale(1.08);
        -webkit-filter: grayscale(.2);
        transform: rotate(-15deg) scale(1.08);
        filter: grayscale(.2);
    }
    50% {
        -webkit-transform: rotate(15deg) scale(1.10);
        -webkit-filter: grayscale(.2);
        transform: rotate(15deg) scale(1.10);
        filter: grayscale(.2);
    }
    60% {
        -webkit-transform: rotate(-15deg) scale(1.13);
        -webkit-filter: grayscale(0);
        transform: rotate(-15deg) scale(1.13);
        filter: grayscale(0);
    }
    70% {
        -webkit-transform: rotate(15deg) scale(1.145);
        -webkit-filter: grayscale(0);
        transform: rotate(15deg) scale(1.13);
        filter: grayscale(0);
    }
    80% {
        -webkit-transform: rotate(-15deg) scale(1.145);
        -webkit-filter: grayscale(0);
        transform: rotate(-15deg) scale(1.145);
        filter: grayscale(0);
    }
    90% {
        -webkit-transform: rotate(15deg) scale(1.15);
        -webkit-filter: grayscale(0);
        transform: rotate(15deg) scale(1.15);
        filter: grayscale(0);
    }
    100% {
        -webkit-transform: rotate(0) scale(1.165);
        -webkit-filter: grayscale(0);
        transform: rotate(0deg) scale(1.155);
        filter: grayscale(0);
    }
}

.qa__text__explain__text {
    width: 100%;
    max-width: 830px;
    max-height: 0px;
    text-align: center;
    padding: 0;
    transition: all .5s;
    margin: 0 auto;
    overflow: hidden;
}
.qa__text__explain__text__inner {
    padding-top: 10px;
}
.qa__text__explain__text__inner p {
    font-size: 1.3em;
    line-height: 1.2em;
}
.qa__text__explain__text--show {
    max-height: 300px
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 730px) {
    .qa__cell {
        margin-bottom: 10px;
    }
    
    .qa__cell:nth-of-type(odd) {
        border-left: none;
        border-right: none;
    }
    .qa__cell:nth-of-type(even) {
        border-left: none;
        border-right: none;
    }
    .qa__cell .qa__text__cell {
        border-bottom: 1px solid var(--gun-grey);
    }
    .qa__cell:nth-of-type(odd) .question__answer:nth-of-type(even) {
        border-right: 1px solid var(--gun-grey);
        border-left: 1px solid var(--gun-grey);
    }
    .qa__cell:nth-of-type(even) .question__answer:nth-of-type(even) {
        border-right: 1px solid #FFF;
        border-left: 1px solid #FFF;
    }

    .qa__cell {
        border: none !important;
    }

    .qa__cell__inner {
        flex-wrap: wrap;
        padding: 0;
        position: relative;
    }
    .qa__cell__inner--1 {
        width: 100%;
        margin: 0;
        padding: 0 0 0 0;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-between;
    }
    .special__icon__label {
        border-left: none;
    }
    .qa__text__explain__icon {
        right: auto;
        margin: 0;
    }
    .qa__text__cell {
        width: 100%;
        padding: 8px 5px 6px;
    }
    .qa__text__cell p {
        text-align: center;
        padding-top: 0px;
        margin: 0;
        width: 100%;
        align-self: center;
        order: 2;
    }
    .question__answer__cell {
        border-left: none;
        max-width: 100%;
        width: 100%;
        justify-content: space-between;
        padding: 0;
        flex: 1 1 auto;
    }
    .qa__cell:nth-of-type(even) .question__answer__cell {
        border-top: 1px solid #FFF;
    }
    .question__answer {
        flex: 1 1 auto;
        padding: 0;
    }
    .question__answer:nth-of-type(even) {
        border-right: 1px solid #FFF;
        border-left: 1px solid #FFF;
    }
    .question__answer label {
        font-size: 1.1em;
        margin: 0;
        padding: 10px 5px;
    }
    .qa__text__explain__text__inner p {
        font-size: 1.1em;
        line-height: 1.1em;
    }
    .question__special {
        order: 3;
    }
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 450px) {
    .qa__text__explain__icon {
        height: 15px;
        min-height: 15px;
        width: 17px;
        min-width: 17px;
        font-size: .7em;
        line-height: .5em;
        padding: 3px 0 0;
        margin-left: 0px;
        margin-right: 4px;
    }
    .qa__text__cell p {
        font-size: 1.2em;
        width: 100%;
        text-align: center;
    }
    .question__special {
        width: 34px;
        min-width: 34px;
    }
    .special__icon {
        width: 100%;
        max-height: 28px;
        -o-object-fit: contain;
        object-fit: contain;
        transition: all .6s;
    }
    .question__answer label {
        font-size: 1.2em;
        padding: 10px 0px 8px;
    }
}
</style>