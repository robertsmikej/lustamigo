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
        <form
            class="question__answer__cell"
        >
            <div class="question__answer__inner">
                <div class="question__answer">
                    <input 
                        :id="question.question + '-notinterested'"
                        :name="question.question"
                        :checked="question.checked === 0 ? true : false"
                        type="radio"
                        value="0"
                        class="question__answer__radio"
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
                        :checked="question.checked === 1 ? true : false"
                        type="radio"
                        value="1"
                        class="question__answer__radio"
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
                        :id="question.question + '-interested'" 
                        :name="question.question"
                        type="radio"
                        value="2"
                        class="question__answer__radio"
                    >
                    <input
                        v-if="!example"
                        :id="question.question + '-interested'"
                        :name="question.question"
                        :checked="question.checked === 2 ? true : false"
                        type="radio"
                        value="2"
                        class="question__answer__radio"
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
                        :id="question.question + 1"
                        :name="question.question + '__want__to__do__to'"
                        :checked="question.singleout === 1"
                        type="radio"
                        :value="1"
                    >
                    <label
                        :for="question.question + 1"
                    >
                        {{ users.name_1 }}
                    </label>
                </div>
                <div class="question__answer question__answer__partner__cell">
                    <input
                        :id="question.question + 2"
                        :name="question.question + '__want__to__do__to'"
                        :checked="question.singleout === 2"
                        type="radio"
                        :value="2"
                    >
                    <label 
                        :for="question.question + 2"
                    >
                        {{ users.name_2 }}
                    </label>
                </div>
            </div>
        </form>
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
        }
    }
}
</script>

<style>

</style>