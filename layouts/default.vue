<template>
    <div>
        <!-- <Nav :site="siteOptions"/> -->
        <Nuxt />
    </div>
</template>

<script>
export default {
    computed: {
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
}
</style>
