<template>
    <div class="category__ad__container">
        <h5
            v-if="category.fullads.length > 0"    
        >
            Some Related Products
        </h5>
        <AdSquare
            v-for="(ad, index) in narrowAds(category.fullads)"
            :ad="ad"
            :key="category.name + ad.name + index"
        />
    </div>
</template>

<script>
export default {
    props: {
        category: Object,
        products: Array
    },
    data () {
        return {
            // narrowedAds: this.getAds()
        }
    },
    methods: {
        getRandom: function (array) {
            return array[Math.floor(Math.random() * array.length)];
        },
        narrowAds: function (arr) {
            return arr.slice(0, 3);
        }
    }
}
</script>

<style>
.category__ad__container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}
.category__ad__container h5 {
    width: 100%;
}
/* .category__ad__container--inner {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
} */
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 900px) {

}
</style>