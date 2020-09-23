<template>
    <div
        class="page__ad__container page__ad__container--square"
    >
        <a
            :href="ad.url"
            class="page__ad page__ad--square"
        >
            <div class="ad__square__image__container">
                <img 
                    :src="adData.img" 
                    :alt="adData.name"
                />
            </div>
            <div class="ad__square__text__container">
                <h5 
                    v-if="ad.name"
                    class="ad__product__name"
                >
                    {{ ad.name }}
                </h5>
                <h6 
                    v-if="ad.brandname"
                    class="ad__product__brand"
                >
                    {{ ad.brandname }}
                </h6>
                <p 
                    v-if="ad.tagline"
                    class="ad__product__tagline"
                >
                    {{ ad.tagline }}
                </p>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        ad: Object
    },
    data () {
        return {
            type: "square"
        }
    },
    computed: {
        adData: function () {
            let ad = this.ad;
            let type = this.type;
            let adimgs = ad.productimgs.imgs.filter(img => {
                return this.type === img.type || img.type.includes(this.type)
            });
            return adimgs[0];
            // console.log(adimgs);
            // if (adimgs.length > 0) {
            //     if (adimgs.length === 1) {
            //         return adimgs[0];
            //     } else {
            //         return adimgs[0]; //SET LOGIC FOR WHAT AD TO SELECT HERE IF MORE THAN ONE AD RETURNED, NOT FINISHED WITH THIS
            //     }
            // }
        }
    }
}
</script>

<style>
.page__ad__container--square {
    flex: 1 1 30%;
    border: 1px solid var(--gun-grey);
    padding: 0;
}
body .page__ad--square {
    text-decoration: none;
    color: inherit;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: center;
}
.ad__square__image__container img {
    height: 100%;
}
.ad__square__text__container {
    width: 100%;
    background-color: var(--guac-green);
    padding: 10px;
    color: #FFF;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.ad__product__name {
    font-size: 1.1em;
    line-height: 1em;
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
</style>