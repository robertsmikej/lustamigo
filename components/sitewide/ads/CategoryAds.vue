<template>
    <section 
        class="category__ad__container"
    >
        <h5>Some Related Products</h5>
        <div 
            class="category__ad__container--inner"
        >
            <AdSquare
                v-for="(ad, index) in narrowedAds"
                :ad="ad"
                :key="category.name + ad.name + index"
            />            
        </div>
    </section>
</template>

<script>
export default {
    props: {
        category: Object,
        products: Array
    },
    data () {
        return {
            narrowedAds: this.getAds(),
            categoryAds: []
        }
    },
    methods: {
        getRandom: function (array) {
            return array[Math.floor(Math.random() * array.length)];
        },
        getAds: function () {
            let questionsWithAds = this.category.questions.filter(function (question) {
                return question.hasOwnProperty("relatedproducts");
            });
            let catArray = [];
            questionsWithAds.forEach(ques => {
                ques.relatedproducts.forEach(ad => {
                    catArray.push(ad);
                });
            })
            let catAds = [...new Set(catArray)];
            this.categoryAds = catAds;
            if (this.categoryAds.length > 0) {
                let narrowedList = [];
                for (var i = 0; i < 3; i++) {
                    let randomAd = this.getRandom(catAds);
                    narrowedList.push(randomAd);
                }
                let fullAdArr = this.products.filter(prod => {
                    return narrowedList.includes(prod.name);
                })
                return fullAdArr;
            }
            
        }
    }
}
</script>

<style>
.category__ad__container {
    width: 100%;
    margin: 0 auto;
}
.category__ad__container--inner {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}
</style>