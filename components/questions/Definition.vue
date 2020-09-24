<template>
    <div
        class="question__definition"
    >
        <h3
            v-if="definition.term && definition.term.length > 2"
        >
            {{ definition.term }}
        </h3>
        <p class="term__from">{{ definition.explainText }}</p>
        <p 
            v-if="definition.definition && definition.definition.length > 2"
            class="term__define"
        >
            Definition:</br>
            {{ definition.definition }}
        </p>
        <p 
            v-if="definition.example && definition.example.length > 2"
            class="term__example">Example:</br>
            {{ definition.example }}
        </p>
        <h3
            v-if="definition.showError"
        >
            {{ definition.errorMessage }}
        </h3>
        <div class="term__buttons">
            <a @click.prevent="getNewDefinition" class="term__getnew">{{ definition.buttonText }}</a>
            <a @click.prevent="closeDefine" class="term__close">{{ definition.closeText }}</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        definition: Object
    },
    methods: {
        getNewDefinition: function () {
            this.$nuxt.$emit('getnewdefine');
        },
        closeDefine: function () {
            this.$nuxt.$emit('hidedefine');
        }
    }
}
</script>

<style>

.question__definition {
    width: 94%;
    max-width: 760px;
    height: 90%;
    max-height: 500px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #FFF;
    border: 4px solid var(--light-orange);
    border-radius: 6px;
    z-index: 30;
    text-align: center;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    z-index: 21;
}
.question__definition p {
    margin: 10px auto;
}
.term__from {
    color: var(--dark-red);
    font-weight: 600;
    text-decoration: underline;
}
.term__define {
    font-weight: 600;
}
.term__example {
    
}
.term__buttons {
    width: 100%;
    max-width: 340px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    margin-top: 10px;
}
.term__getnew,
.term__close {
    flex: 1 1 40%;
    padding: 10px;
    color: #FFF;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    font-size: 1.1em;
    line-height: 1.1em;
    margin: 10px;
}
.term__getnew {
    background-color: var(--dark-red)
}
.term__close {
    background-color: var(--light-blue2)
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width:800px) {
    .question__definition {
        padding: 10px 10px;
    }
    .question__definition p {
        font-size: 1em;
        line-height: 1.1em;
    }
}
</style>