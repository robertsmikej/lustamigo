<template>
    <div>
        <Nav :sitewide="sitewide" :nav="nav"/>
        <Nuxt />
        <Footer/>
    </div>
</template>

<script>
export default {
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        nav: function () {
            return this.$store.state.nav
        }
    }
}
</script>

<style>
:root {
    --yellow: #F8CF3C;
    --yellow2: #FDD343;
    --light-orange: #FFA500;
    --clay: #F0B452;
    --dark-orange: #EA7B2D;
    --light-green: #3b8070;
    --green: #508844;
    --light-green: #6CDB8E;
    --very-light-green: #DDFFDD;
    --guac-green: #77AF54;
    --red: #C4050B;
    --dark-red: #9C1611;
    --very-light-blue: #BEE6F0;
    --light-blue: #98A7EA;
    --light-blue2: #4C70B2;
    --blue: #2655AD;
    --dark-blue: #00215B;
    --aqua: #3EB5C7;
    --purple: #803E7F;
    --dark-purple: #6C5662;
    --gun-grey: #35495e;
    --dark-grey: #40270F;
    --light-grey: #f2f2f2;
    --question-color: #508844;

    --main-font: 'Neucha', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
}
html {
    font-family: var(--main-font);
    font-size: 1em;
    color: var(--dark-grey);
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
}

body {
    -webkit-overflow-scrolling: touch;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}

h1 {
    font-weight: 900;
    text-transform: uppercase;
    font-size: 2.5em;
    line-height: 1.2em;
    letter-spacing: 3px;
    margin: 10px auto;
    max-width: 640px;
}
h2 {
    font-weight: 500;
    font-size: 2.3em;
    line-height: 1em;
    letter-spacing: 2px;
    margin: 20px 0 4px;
    text-align: center;
}
h3 {
    font-weight: 300;
    font-size: 2.1em;
    line-height: 1em;
    letter-spacing: 2px;
    margin: 10px 0;
    text-align: center;
}
h4 {
    font-weight: 300;
    font-size: 2em;
    line-height: 1em;
    letter-spacing: 2px;
    margin: 10px 0;
}
h5 {
    font-weight: 500;
    font-size: 1.7em;
    line-height: 1em;
    letter-spacing: 2px;
    margin: 10px 0;
}
h6 {
    font-weight: 500;
    font-size: 1.5em;
    line-height: 1em;
    letter-spacing: 2px;
    margin: 10px 0;
}
p, label {
    font-size: 1.2em;
    line-height: 1.2em;
    font-weight: 500;
    margin: 10px 0;
}
.para__slighty__larger {
    font-size: 1.5em;
    line-height: 1.5em;
    font-weight: 600;
}
.underlined {
    text-decoration: underline;
}
.small__para {
    font-size: .8em;
    margin: 0 auto 10px;
}
ul {
    margin: 10px 0;
}
li {
    font-size: 1.2em;
    line-height: 1.2em;
    font-weight: 500;
    margin: 10px 0;
}
a {
    display: block;
}

.padded__section {
    padding: 0 20px;
}
.padded__section p a {
    background-color: var(--blue);
    padding: 10px 10px 6px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    color: #FFF;
    text-transform: uppercase;
    line-height: 1.1em;
    font-size: 1em;
    width: 260px;
    margin: 20px auto 10px;
    font-weight: 600;
    letter-spacing: 2px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
}

.button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid var(--light-green);
    color: var(--light-green);
    text-decoration: none;
    padding: 10px 30px;
}

.button--green:hover {
    color: #fff;
    background-color: var(--light-green);
}

.button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid var(--gun-grey);
    color: var(--gun-grey);
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
}

.button--grey:hover {
    color: #fff;
    background-color: var(--gun-grey);
}

.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  -webkit-overflow-scrolling: touch;
}

.submit__button {
    display: block;
    max-width: 270px;
    width: 100%;
    margin: 20px auto 20px;
    background-color: var(--purple);
    color: #FFF;
    font-size: 25px;
    line-height: 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    font-family: var(--main-font);
    padding: 14px 10px 10px;
    border: none;
    transition: background-color .5s;
}
.submit__button:hover {
    background-color: var(--dark-orange);
}

.half__header {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
}
.half__header__inner {
    width: 100%;
    max-width: 900px;
    padding: 140px 20px 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;
}


.page__content {
    width: 100%;
    max-width: 960px;
    padding: 30px 10px 0;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    position: relative;
}
.page__content--nowrap {
    flex-wrap: nowrap;
}
.page__content h2 {
    color: var(--red);
    margin-top: 28px;
}
.page__content p {
    width: 100%;
}
.page__content--side {
    /* width: auto; */
    flex: 0 1 auto;
    max-width: 750px;
}

.info__para {
    max-width: 860px;
    margin: 10px auto 10px;
    position: relative;
}
.enter__info__fields {
    width: 100%;
    /* max-width: 960px; */
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    margin: 0 auto;
}
.info__section {
    padding: 20px 40px 60px;
    width: 100%;
    /* max-width: 860px; */
    margin: 0px auto 40px;
}
.info__section:nth-of-type(odd) {
    background: var(--light-blue);
}
.info__section:nth-of-type(even) {
    background: var(--guac-green);
}
.enter__info__fields label {
    margin: 5px 0;
    font-size: 1.6em;
    color: #FFF;
}
.equipment__label {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    font-size: 1.6em;
    line-height: 1.4em;
    color: #FFF;
}
.enter__info__fields input {
    width: 100%;
    padding: 10px;
    font-size: 1.5em;
    line-height: 1.4em;
    font-family: 'Neucha', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    text-align: center;
    color: var(--dark-blue);
    border-style: solid;
}
.info__text__field {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    margin: 0 0 20px;
}
.form__spacer {
    margin-top: 0px;
}
.info__radio__field {
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: space-between;
    margin: 20px 0 0;
}
.info__radio__field input {
    position: absolute;
    left: -100000px;
}
.info__radio__field label {
    flex: 1 0 23%;
    transition: all .5s;
    border-radius: 10px;
    cursor: pointer;
    padding: 0 8px;
    margin: 4px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    color: #FFF;
}
label.info__radio__field--equipment {
    flex: 1 0 46%;
}
.info__radio__field--spicelevel label {
    max-width: 23%;
}
.info__radio__field label:hover {
    background: var(--yellow);
}
.info__radio__field input[type="radio"]:checked + label {
    background: var(--yellow);
}
/* .info__radio__field input[type="radio"]:checked + label .form__para, */
.info__radio__field input[type="radio"]:checked + label .small__para {
    color: var(--blue);
}
.form__img__container {
    padding: 40px 20px 30px;
    height: 200px;
    max-height: 200px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
}
.form__img {
    max-width: 160px;
    max-height: 160px;
    object-fit: contain;
}
.form__para {
    width: 100%;
    margin: 0px;
    z-index: 1;
    font-size: 1.6em;
    color: #FFF;
    transition: all .6s;
}



.qa__cell {
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: center;
    border: 1px solid var(--gun-grey);
    /* border-top: none; */
    margin: 16px 0;
}
.answer__container__cell {
    border-right: none;
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
    flex: 1 1 50%;
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
    flex: 0 1 330px;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    border-left: 1px solid var(--gun-grey);
    margin-left: auto;
}
.answer__cell__inner .question__answer__cell {
    flex: 0 1 310px;
}
.question__answer__inner {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
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
    font-size: 1.1em;
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
body .question__answer__both__partners label:hover {
    background: inherit;
    color: inherit !important;     
}
.question__answer__partner__cell input[type="radio"] {
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

.question__answer__partner__cell input[type="radio"]:checked + label {
    background: var(--light-blue2);;
    border: none;
    font-weight: 700;
    color: #FFF;
}
.question__answer__partner__cell {
    flex: 0 1 auto;
}
.question__answer__both__partners p {
    font-size: 1em;
    line-height: 1em;
    padding: 0px 4px 0 12px;
    align-self: center;
    text-align: left;
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
    max-height: 33px;
    object-fit: contain;
}
.qa__cell input[type="checkbox"]:checked + label img {
    animation: spicyshaker 3s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-direction: normal;
}
@keyframes spicyshaker {
    0% {
        transform: rotate(0) scale(1);
        filter: grayscale(.5);
    }
    10% {
        transform: rotate(15deg) scale(1.03);
        filter: grayscale(.5);
    }
    20% {
        transform: rotate(-15deg) scale(1.06);
        filter: grayscale(.45);
    }
    30% {
        transform: rotate(15deg) scale(1.06);
        filter: grayscale(.4);
    }
    40% {
        transform: rotate(-15deg) scale(1.09);
        filter: grayscale(.2);
    }
    50% {
        transform: rotate(15deg) scale(1.13);
        filter: grayscale(.2);
    }
    60% {
        transform: rotate(-15deg) scale(1.13);
        filter: grayscale(.3);
    }
    70% {
        transform: rotate(15deg) scale(1.09);
        filter: grayscale(.3);
    }
    80% {
        transform: rotate(-15deg) scale(1.06);
        filter: grayscale(.45);
    }
    90% {
        transform: rotate(15deg) scale(1.03);
        filter: grayscale(.55);
    }
    100% {
        transform: rotate(0deg) scale(1);
        filter: grayscale(.5);
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
@media screen and (max-width: 940px) {
    .info__radio__field label {
        flex: 0 1 auto;
        padding: 0 4px;
    }
    label.info__radio__field--equipment {
        flex: 1 1 46%;
    }
    .form__img__container {
        padding: 20px;
        height: auto;
        flex: 0;
    }
    .form__img {
        max-height: 120px;
        width: 100%;
    }
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 890px) {
    .qa__text__cell {
        flex: 1 0 60%;
        padding: 0 0 0 8px;
    }
    .qa__cell__inner {
        flex-wrap: nowrap;
    }
    .question__answer__cell {
        flex: 0 0 40%;
        margin-left: 0;
        flex-wrap: nowrap;
    }
    .question__answer__inner {
        flex-wrap: nowrap;
    }
    .question__answer label {
        font-size: 1em;
        line-height: 1em;
        padding-bottom: 5px;
    }
    .question__answer__inner {
        flex: 1;
    }
    .question__answer__cell {
        height: auto;
    }
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
    .qa__cell .question__answer__both__partners .question__answer:nth-of-type(2) {
        border: none;
    }
    .question__answer__both__partners  input[type="radio"] {
        display: block;
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
        padding: 8px 8px 6px;
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
    .question__answer__partner__cell {
        flex: 0 1 auto;
        margin: 0 10px;
    }
    .question__answer__both__partners {
        justify-content: center;
    }
    .question__answer__both__partners p {
        padding-top: 2px;
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
@media screen and (max-width: 730px) {
    h1 {
        font-size: 2.7em;
        line-height: 1em;
    }
    h2 {
        font-size: 2.5em;
        line-height: 1em;
    }
    h3 {
        font-size: 2em;
        line-height: 1em;
    }
    h5 {
        font-size: 1.4em;
        line-height: 1em;
    }
    li {
        font-size: 1.1em;
        line-height: 1.1em;
    }
    p, label {
        font-size: 1.3em;
        line-height: 1.3em;
        font-weight: 400;
        margin: 11px 0 10px;
    }
    .page__content {
        padding: 40px 10px 0;
    }
    .page__content--nowrap {
        flex-wrap: wrap-reverse;
    }
    .submit__button {
        font-size: 1.4em;
        line-height: 1em;
        max-width: 220px;
        padding: 8px 10px 6px;
    }
    .padded__section {
        padding: 0 14px;
    }
    .half__header__inner {
        padding-top: 100px;
    }
    .enter__info {
        padding: 30px 0;
        width: 100%;
    }
    .enter__info h2, .enter__info p {
        padding: 0 2px;
    }
    .info__para {
        margin: 0 0 14px;
        align-self: center;
    }
    body .pepper__example {
        height: 36px;
        width: 30px;
        max-width: 30px;
    }
    body .pepper__example__img {
        top: 2px;
        left: 0px;
        height: 100%;
    }
    .example__question .question__answer__cell {
        border-left: none;
    }
    .enter__info__fields {
        padding: 0px 0;
        margin-top: 40px;
    }
    .info__section {
        padding: 40px 16px;
    }
    .form__img {
        max-width: 96%;
        max-height: 110px;
        object-fit: contain;
    }
    .enter__info__fields input {
        border: 2px solid var(--gun-grey);
        border-radius: 8px;
    }
    .small__para {
        text-align: center;
    }
    .form__img__container {
        padding: 16px 10px 16px;
        max-height: 70%;
        flex: 1;
    }
    body .disclaimer__para {
        padding: 0 10px;
    }

    .info__radio__field {
        flex-wrap: wrap;
    }
    .info__radio__field label {
        flex: 0 1 46%;
        padding: 0 4px;
    }
    .info__radio__field--spicelevel label {
        max-width: 46%;
    }
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 620px) {
    h1 {
        font-size: 2.5em;
        line-height: 1em;
    }
    h2 {
        font-size: 2.3em;
        line-height: 1em;
    }
    h3 {
        font-size: 2em;
        line-height: 1em;
    }
    h5 {
        font-size: 1.4em;
        line-height: 1em;
    }
    li {
        font-size: 1.1em;
        line-height: 1.1em;
    }
    p, label {
        font-size: 1.3em;
        line-height: 1.3em;
        font-weight: 400;
        margin: 11px 0 10px;
    }
    .form__para {
        font-size: 1.2em;
    }
    .form__img__container {
        padding: 8px;
    }
    .page__content {
        padding: 20px 10px 0;
    }
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 480px) {
    h2 {
        margin-top: 14px;
    }
    h3 {
        font-size: 1.8em;
        line-height: 1em;
    }
    h5 {
        font-size: 1.3em;
    }
    li {
        font-size: 1em;
        line-height: 1.1em;
    }
    p, label {
        font-size: 1.1em;
        line-height: 1.4em;
        font-weight: 400;
        margin: 11px 0 10px;
    }
    .enter__info h2 {
        margin-top: 20px;
    }
    .info__section {
        padding: 20px 6px 40px;
    }
    .info__radio__field label {
        padding: 0 4px;
        margin: 4px 2px;
    }
    .info__radio__field p {
        padding: 0 4px;
    }
    .form__para {
        font-size: 1em;
        color: #FFF;
        transition: all .6s;
        padding: 0;
    }
    .small__para {
        font-size: .6em;
    }
    .form__img {
        max-height: 84px;
    }
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