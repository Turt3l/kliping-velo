<template>
    <div class="picture-quote-container">
        <div class="quote-wrapper">
            <!-- <h1>"</h1> -->
            <h1>{{$t("Ar augstāku riteni augstāki sasniegumi")}}</h1>
        </div>
        <div class="picture-container">
            <img src="../assets/images/velo.jpg"  />
            <!-- <img src="../assets/images/velo.jpg" class="slide slide1" id="1">
            <img src="../assets/images/velo.jpg" class="slide slide2" id="2">
            <img src="../assets/images/velo.jpg" class="slide slide3" id="3">
            <img src="../assets/images/velo.jpg" class="slide slide4" id="4"> -->
        </div>
    </div>
</template>
<script>
export default {
    // mounted() {
    // const slider = document.getElementsByClassName('picture-container')
    //     if (slider.length) {
    //     const speed = 1000
    //     let curslide = 0
    //     const slides = Array.from(document.getElementsByClassName('slide'))
    //     function nextSlide () {
    //         curslide++
    //         if (curslide >= slides.length + 1) {
    //         curslide = 0
    //         slides.forEach((element, i) => {
    //             element.classList.remove('visible')
    //         })
    //         } else {
    //         const slides1 = document.getElementById(curslide)
    //         slides1.classList.add('visible')
    //         }
    //     }
    //     setInterval(function () {
    //         nextSlide()
    //     }, speed)
    //     }
    // }
}
</script>
<i18n>
    {
        "lv": {
            "Ar augstāku riteni augstāki sasniegumi": "Ar augstāku riteni augstāki sasniegumi"
        },
        "en": {
            "Ar augstāku riteni augstāki sasniegumi": "Higher achievements with a higher bike"
        }
    }
</i18n>