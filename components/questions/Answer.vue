<template>
    <div class="qa__cell__inner answer__cell__inner">
         <div class="qa__text__cell">
            <p>
                {{ answer.question }}
            </p>
            <div 
                v-if="answer.description"
                @click="toggleExplainButton" 
                class="qa__text__explain__icon"
            >
                <span>?</span>
            </div>
            
        </div>
        <div class="question__answer__cell">
            <div class="question__answer__inner">
                <div class="question__answer answer__cell">
                    <div class="answer__cell__inner">
                        <p>{{ translateResponse(answer.answers["1"]) || 'N/A' }}</p>
                        <img  
                            v-if="answer.answers['1'] && answer.answers['1'].superhot" 
                            :src="getImage('Pepper')[0].img"
                            alt="This Question Was Hot!" 
                            class="answer__hot__img"
                        >
                    </div>
                    <div 
                        v-if="answer.answers['1'].singleout != 0"
                        class="answer__cell__inner answer__cell__inner--secondary"
                    >
                        <p>Only Do To: {{ translateName(answer.answers['1'].singleout) }}</p>
                    </div>
                </div>
                <div class="question__answer answer__cell">
                    <div class="answer__cell__inner">
                        <p>{{ translateResponse(answer.answers["2"]) || 'N/A' }}</p>
                        <img 
                            v-if="answer.answers['2'] && answer.answers['2'].superhot" 
                            :src="getImage('Pepper')[0].img"
                            alt="This Question Was Hot!" 
                            class="answer__hot__img"
                        >
                    </div>
                    <div 
                        v-if="answer.answers['2'] && answer.answers['2'].singleout != 0"
                        class="answer__cell__inner answer__cell__inner--secondary"
                    >
                        <p>Only Do To: {{ translateName(answer.answers['2'].singleout) }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="answer.description"
            class="qa__text__explain__text"
        >
            <div class="qa__text__explain__text__inner">
                <p>{{ answer.description }}</p>
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
    data () {
        return {
            answerKey: {
                0: "¡No Way, Jose!",
                1: "Open To It...",
                2: "¡Sí por favor!"
            }
        }
    },
    props: {
        answer: Object,
        example: Boolean,
        users: Object,
        userDone: Number,
        checked: Object,
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
        translateResponse: function (answer) {
            if (answer && answer.answer) {
                return this.answerKey[answer.answer];
            }
        },
        translateName: function (namenumber) {
            return namenumber === 1 ? this.users.name_1 : this.users.name_2;
        }
    }
}
</script>

<style>
    .answer__cell {
        flex: 1 1 50%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        justify-content: flex-start;
        height: 100%;
    }
    .answer__cell__inner {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        justify-content: center;

    }
    .answer__cell__inner--secondary p {
        margin: 0px auto 3px;
        font-size: 14px;
        font-weight: 600;
    }
    .answer__key__cell {
        position: sticky;
        top: 148px;
        background-color: var(--light-grey);
        z-index: 20;
        /* border: 1px solid var(--gun-grey); */
    }
    body .answer__key__names__cell {
        display: flex;
        flex-direction: row;
        align-content: flex-start;
        justify-content: space-around;
        margin-left: auto;
        width: 310px;
        padding-top: 2px;
        border-left: none;
        border-right: none;
        background-color: var(--light-grey);
    }
    .answer__key__names__cell h5 {
        width: 100%;
    }
    .answer__cell .qa__text__explain__icon {
        background-color: var(--green);
    }
    .answer__hot__img {
        max-height: 30px;
        margin-left: 0;
        margin-right: 0;
        margin-top: -2px;
        animation: spicyanswershaker 1.2s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-direction: alternate;
        position: absolute;
        top: 9px;
        right: 5px;
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
        /* .answer__key__cell {
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
        } */
    }
    
</style>
