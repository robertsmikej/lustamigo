<template>
    <div class="page__ad__container page__ad__container--square">
        <a :href="ad.url" class="page__ad page__ad--square">
            <div class="ad__square__image__container">
                <img :src="ad.img" :alt="ad.name"/>
            </div>
            <div class="ad__square__text__container">
                <h5 class="ad__product__name">{{ ad.name }}</h5>
                <h6 class="ad__product__brand">{{ ad.brandname }}</h6>
                <p class="ad__product__tagline">{{ ad.tagline }}</p>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        ad: Object
    }
}
</script>

<style>
.page__ad__container--square {
    flex: 1 1 30%;
    max-width: 33%;
    border: 1px solid var(--gun-grey);
    padding: 0;
    display: block;
}
body .page__ad--square {
    width: 100%;
    text-decoration: none;
    color: inherit;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: center;
}
.ad__square__image__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.ad__square__image__container img {
    height: 100%;
    object-fit: contain;
}
.ad__square__text__container {
    width: 100%;
    height: 140px;
    max-height: 140px;
    min-height: 140px;
    margin-top: auto;
    background-color: var(--guac-green);
    padding: 10px;
    color: #FFF;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.ad__product__name {
    font-size: 1.1em;
    line-height: 1.2em;
    font-weight: 700;
}
.ad__product__brand {
    font-size: 1em;
    line-height: 1em;
    margin: 2px auto;
}
.ad__product__tagline {
    font-size: .9em;
    line-height: 1em;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 600px) {
    .page__ad__container--square {
        flex: 1 1 45%;
        max-width: 100%;
        margin: 5px;
    }
}
</style>