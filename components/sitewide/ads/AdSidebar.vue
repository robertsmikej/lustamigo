<template>
    <section class="page__ad__container page__ad__container--side page__ad__container--side--right">
        <!-- <a
            :href="a"
        >
            <picture class="page__ad page__ad--side">
                <source 
                    :srcset="a"
                    media="(min-width: 730px)"
                >
                <img 
                    :src="a" 
                    :alt="a"
                />
            </picture>
        </a> -->
    </section>
</template>

<script>
export default {
    props: {
        ad: Object
    },
    computed: {

    },
    data () {
        return {
            
        }
    },
    methods: {
    
    },
    mounted () {

    }
}
</script>

<style>
    .page__ad__container {
        margin: 10px;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        align-items: flex-start;
    }
    .page__ad__container--side {
        flex: 1 0 160px;
    }
    .page__ad__container--side--right {
        margin-left: 40px;
    }
    .page__ad__container--side--left {
        margin-right: 40px;
    }
    .page__ad__container a {
        position: sticky;
        top: 100px;
        left: 0;
    }
    .page__ad__container picture {
        width: 100%;
    }
    .page__ad__container img {
        width: 100%;
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 1000px) {
        .page__ad__container--side {
            flex: 1 0 100px;
        }
        .page__ad__container--side--right {
            margin-left: 20px;
        }
        .page__ad__container--side--left {
            margin-right: 20px;
        }
    }
    /* ------------------ MEDIA QUERY ------------------ */
    @media screen and (max-width: 730px) {
        .page__ad__container--side--right,
        .page__ad__container--side--left {
            margin: 10px 0;
        }
    }
</style>