<template>
    <section
        v-if="adData"
        class="page__ad__container page__ad__container--side page__ad__container--side--right"
    >
        <a
            :href="ad.ad_data.url"
        >
            <picture
                class="page__ad page__ad--side"
            >
                <source
                    :srcset="adData.img"
                    media="(min-width: 730px)"
                >
                <img 
                    :src="adData.img" 
                    :alt="adData.name"
                />
            </picture>
        </a>
    </section>
</template>

<script>
export default {
    props: {
        ad: Object
    },
    computed: {
        adData: function () {
            let ad = this.ad;
            let type = ad.type;
            let adimgs = ad.ad_data.productimgs.imgs.filter(img => {
                return ad.type === img.type || img.type.includes(ad.type)
            });
            // console.log(adimgs);
            if (adimgs.length > 0) {
                if (adimgs.length === 1) {
                    return adimgs[0];
                } else {
                    return adimgs[0]; //SET LOGIC FOR WHAT AD TO SELECT HERE IF MORE THAN ONE AD RETURNED, NOT FINISHED WITH THIS
                }
            }
        }
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
        height: 100%;
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