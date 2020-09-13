<template>
    <footer>
        <div class="footer__grid">
            <div class="footer__grid__cell">
                <img
                    :src="getImage('Main Logo')[0].img" 
                    alt="Basic Questions Selection"
                    class="footer__logo"
                >
                <h5 class="footer__site__name">The Lust Amigo</h5>
            </div>
        </div>
    </footer>
</template>


<script>

export default {
    props: {
        
    },
    computed: {
        sitewide: function () {
            return this.$store.state.sitewide
        },
        categories: function () {
            return this.$store.state.categories
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        getImage: function(name) { //GET IMAGE FROM LIST OF SITE IMAGES FROM NETLIFYCMS
            const images = this.sitewide.siteimages;
            return images.filter(img => img.imagename === name);
        },
    }
}
</script>


<style>
footer {
    width: 100%;
    margin: 40px auto 0;
    padding: 40px 20px 80px;
    background-color: var(--light-blue2);
}
.footer__grid {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.footer__logo {
    margin: 10px auto;
    display: block;
    max-width: 140px;
}
.footer__site__name {
    color: #FFF;
}
</style>
