<template>
    <div
        v-if="adData"
        class="page__ad__container page__ad__container--banner"
    >
        <a
            :href="ad.ad_data.url"
        >
            <picture
                class="page__ad page__ad--banner"
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
    </div>
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

</style>