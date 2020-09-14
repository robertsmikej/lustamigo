<template>
    <div
        :style="{ backgroundImage: `url(${dataObj.heroBanner.background_desktop})` }"
        class="header"
    >
        <div class="header__inner">
            <div class="header__side">
                <div class="header__man__container">
                    <img 
                        :src="dataObj.heroBanner.desktop" 
                        :alt="dataObj.heroBanner.para" 
                        class="header__man"
                    >
                </div>
            </div>
            <div class="header__side">
                <h1>{{ dataObj.heroBanner.header_1 }}</h1>
                <p>{{ dataObj.heroBanner.para }}</p>
                <div class="hero__buttons">
                    <a 
                        v-scroll-to="{el: '#get__started',offset: -120}"
                        class="hero__button"
                    >
                        Let's Do It!
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    props: {
        dataObj: Object
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    }
}
</script>


<style>
.header {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    font-family: "Neucha", sans-serif;
    height: 86vh;
    max-height: 900px;
    position: relative;
    z-index: 1;
    padding: 0;
    background-color: var(--light-blue);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center bottom;
}
.header__inner {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
}
.header__side {
    flex: 1 1 50%;
    max-width: 660px;
    padding: 10vh 20px 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    position: relative;
}
.header__side:nth-of-type(1) {
    flex-direction: row;
    align-content: flex-end;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.header__side:nth-of-type(2) {
    padding-bottom: 16vh;
}
.header h1 {
    text-shadow: 2px 2px 4px #FFF;
}
.header p {
    margin: 30px auto 0px;
    max-width: 440px;
    text-shadow: 2px 2px 1px #FFF;
}
.hero__buttons {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: space-around;
}
.hero__button {
    background-color: var(--green);
    padding: 10px 10px 6px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    color: #FFF;
    text-transform: uppercase;
    line-height: 1.3em;
    font-size: 1.4em;
    width: 210px;
    margin: 30px 10px 10px;
    font-weight: 600;
    letter-spacing: 2px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
}
.hero__button:nth-of-type(2) {
    background-color: var(--blue);
}
.header__cactus__container {
    margin-right: 30px;
    flex: 1 1 33%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-end;
    justify-content: center;
}
.header__cactus {
    max-width: 160px;
}
.header__bed__container {
    margin-top: auto;
    margin-left: auto;
    flex: 2 1 66%;
}
.header__bed {
    transform: scaleX(-1);
    max-width: 400px;
}
.header__man__container {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: flex-end;
}
.header__man {
    align-self: flex-end;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 730px) {
    .header {
        height: auto;
        max-height: 100%;
    }
    .header__inner {
        flex-direction: column-reverse;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
        padding-top: 6vh;
        position: initial;
    }
    .header__side {
        max-width: 100%;
        padding: 20px 14px;
        margin: 0 auto;
    }
    .header__side:nth-of-type(2) {
        padding-bottom: inherit;
    }
    .header p {
        margin: 10px auto 0px;
    }
    .hero__button {
        font-size: 1.3em;
    }
    .header__man__container {
        justify-content: center;
    }
    .header__man {
        max-width: 85%;
    }
}
</style>
