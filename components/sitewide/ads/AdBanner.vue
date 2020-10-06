<template>
    <div
        v-if="ad.data"
        class="page__ad__container page__ad__container--banner"
    >
        {{ad}}
        <a
            :href="ad.data.url"
        >
            <picture
                v-if="ad.data.productimgs[0].img"
                class="page__ad page__ad--side"
            >
                <source
                    :srcset="ad.data.productimgs[0].img"
                    media="(min-width: 730px)"
                >
                <img 
                    :src="ad.data.productimgs[0].img" 
                    :alt="ad.data.name"
                />
            </picture>
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

</style>