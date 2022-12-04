<template>
    <div>
    <h1 class="section-header">history</h1>
    <div>
        <div class="historyContainer" >
            <div class="pagContainer">
                <div class="pagination">
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="swiper swiper1">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="slide-content">
                            <div class="slide-container">
                                <div class="slide-content-wrap">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur molestiae molestias laboriosam illum quibusdam aperiam cumque assumenda dolor, nesciunt sint odio eum est culpa voluptatum libero illo? Consectetur, tempora!</p>
                                </div>
                                <div class="img-container">
                                    <img src="../assets/images/M.png"/>
                                </div>
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
    import { Swiper, Pagination } from 'swiper'
    import 'swiper/swiper-bundle.css'
    export default {
        mounted() {
            new Swiper('.swiper1', {
                modules: [Pagination],
                freeMode: true,
                direction: 'horizontal',
                slidesPerView: 1,
                speed: 1500,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }
            })
        }
    }
    
</script>