<template>
    <div>
        <Nav :sitewide="sitewide" :nav="nav"/>
        <Nuxt />
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
    font-size: 3em;
    line-height: 1.2em;
    letter-spacing: 3px;
    margin: 10px auto;
    max-width: 640px;
}
h2 {
    font-weight: 500;
    font-size: 3em;
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
    font-size: 1.4em;
    line-height: 1.3em;
    font-weight: 500;
    margin: 11px 0 11px;
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
    font-size: 1.3em;
    line-height: 1.3em;
    font-weight: 500;
    margin: 10px 0;
}
a {
    display: block;
}

.padded__section {
    padding: 0 20px;
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


.enter__info {
    padding: 70px 0;
    width: 100%;
    max-width: 960px;
}
.enter__info h2 {
    color: var(--red);
    margin-top: 24px;
}
.info__para {
    max-width: 860px;
    margin: 10px auto 10px;
    position: relative;
}
.enter__info__fields {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    margin: 20px auto 0;
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
}
.info__text__field {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    margin: 0px 0 20px;
}
.form__spacer {
    margin-top: 0px;
}
.info__radio__field {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;
    margin: 20px 0 0;
}
.info__radio__field input {
    position: absolute;
    left: -100000px;
}
.info__radio__field label {
    flex: 1 1 0;
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
        max-height: 80px;
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
    }
    body .disclaimer__para {
        padding: 0 10px;
    }
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 480px) {
    h1 {
        font-size: 2.5em;
        line-height: 1em;
    }
    h2 {
        font-size: 2.3em;
        line-height: 1em;
        margin-top: 14px;
    }
    h3 {
        font-size: 1.8em;
        line-height: 1em;
    }
    h5 {
        font-size: 1.3em;
        line-height: 1em;
    }
    li {
        font-size: 1em;
        line-height: 1.1em;
    }
    p, label {
        font-size: 1.1em;
        line-height: 1.2em;
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
}
</style>
