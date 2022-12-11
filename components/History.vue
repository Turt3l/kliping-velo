<template>
    <div>
    <div>
        <div class="historyContainer" >
            <div class="pagContainer">
                <div class="pagination">
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="swiper swiper1">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" >
                        <div class="slide-content">
                            <AdventuresVue/>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide-content">
                            <div class="slide-container">
                                <OtherBikes/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    const { default: AdventuresVue } = require("./slideContent/Adventures.vue");
    const { default: OtherBikes } = require("./slideContent/OtherBikes.vue");
    const { default: Gallery } = require("./Gallery.vue");
    import { Swiper, Pagination, Autoplay } from 'swiper'
    import 'swiper/swiper-bundle.css'
    export default {
        mounted() {
            new Swiper('.swiper1', {
                modules: [Pagination, Autoplay],
                direction: 'horizontal',
                slidesPerView: 1,
                speed: 1500,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: true
                }
            })
        },
        components: {
            AdventuresVue,
            OtherBikes,
            Gallery
        }
    }
    
</script>