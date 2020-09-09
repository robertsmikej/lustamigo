<template>
    <nav>
        <div class="nav__inner">
            <div class="nav__hamburger" @click="toggleMobileNav">
                <div class="hamburger__line"></div>
                <div class="hamburger__line"></div>
                <div class="hamburger__line"></div>
            </div>
            <div class="mobile__nav" :class="{showMobileNav: this.mobileNav}">
                <div class="mobile__nav__exit" @click="toggleMobileNav">
                    X
                </div>
                <div class="nav__side nav__side--left nav__mobile">
                    <nuxt-link
                        to="/questions"
                        class="nav__link"
                        @click.native="toggleMobileNav"
                    >
                        See Questions
                    </nuxt-link>
                </div>
                <div class="nav__side nav__side--right nav__mobile">
                    <nuxt-link
                        to="/contact"
                        class="nav__link"
                        @click.native="toggleMobileNav"
                    >
                        Contact Us
                    </nuxt-link>
                </div>
            </div>
            <div class="nav__side nav__side--left nav__desktop">
                <nuxt-link to="/questions" class="nav__link">See Questions</nuxt-link>
            </div>
            <div class="nav__side nav__side--right nav__desktop">
                <nuxt-link to="/contact" class="nav__link">Contact Us</nuxt-link>
            </div>
            <nuxt-link to="/" class="nav__logo__link">
                <img :src="sitewide.logo" alt="Lust Amigo Logo" class="nav__logo">
            </nuxt-link>
        </div>
    </nav>
</template>


<script>

export default {
    props: {
        sitewide: Object,
        nav: Array
    },
    data() {
        return {
            mobileNav: false
        }
    },
    methods: {
        toggleMobileNav: function () {
            this.mobileNav = !this.mobileNav;
        }
    }
}
</script>


<style>
nav {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 21;
}
.mobile__nav {
    display: none;
}
.nav__inner {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    background-color: var(--dark-red);
    height: 74px;
    z-index: 2;
}
.nav__hamburger {
    display: none;
}
.nav__side {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    text-align: center;
}
.nav__side--left {
    order: 1;
}
.nav__side--right {
    order: 3;
}
a.nav__link {
    color: #FFF;
    text-decoration: none;
    font-family: var(--main-font);
    font-size: 1.2em;
    margin-top: 3px;
}
.nav__logo__container {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
}
.nav__logo__link {
    order: 2;
    flex: 1 1 auto;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: flex-start;
}
.nav__logo {
    max-height: 140px;
    align-self: flex-start;
    margin: 3px auto 0;
}

/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 730px) {
    .nav__logo__link {
        flex: 0 1 auto;
    }
    .mobile__nav {
        position: fixed;
        top: 0;
        left: -3000px;
        transition: all .8s;
        width: 100vw;
        height: 100vh;
        background-color: var(--dark-red);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
    }
    .showMobileNav {
        left: 0px;
    }
    .mobile__nav__exit {
        position: absolute;
        top: 0px;
        right: 30px;
        color: #FFF;
        font-size: 2em;
        line-height: 2em;
        font-weight: 700;
        cursor: pointer;
    }
    .nav__desktop {
        display: none;
    }
    .nav__inner {
        height: 45px;
        padding: 0;
    }
    .nav__hamburger {
        padding: 6px;
        width: 36px;
        height: 30px;
        align-self: center;
        position: absolute;
        top: 8px;
        left: 12px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-between;
        cursor: pointer;
    }
    .hamburger__line {
        width: 100%;
        height: 2px;
    }
    .hamburger__line:nth-of-type(1) {
        background-color: var(--light-blue2);
    }
    .hamburger__line:nth-of-type(2) {
        background-color: var(--yellow);
    }
    .hamburger__line:nth-of-type(3) {
        background-color: var(--green);
    }
    .nav__logo__container {
        flex: 1;
    }
    .nav__logo {
        max-height: 75px;
    }
    a.nav__link {
        font-size: 1.6em;
        text-align: center;
        padding: 0 2px;
    }
    .nav__side {
        flex: 0;
        width: auto;
        margin: 10px 0;
        font-size: 1.4em;
    }
    
}

/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 470px) {
    .nav__side {
        padding: 0 6px;
    }
}
</style>
