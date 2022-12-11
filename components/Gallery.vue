<template>
    <div class="galleryContainer">
        <h1>{{$t('Galerija')}}</h1>
        <div class="galleryWrap">
            <div class="activeImage">
                <img :src="activePic">
            </div>
            <div class="gallery">
                <div class="images">
                    <div v-for="(picture, index) in pictures" class="image" :key="('image' + index)">
                        <img :src="picture" @click="changeActiveImage(index)"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<i18n>
{ 
    "lv": {
        "Galerija": "Galerija"
    },
    "en": {
        "Galerija": "Gallery"
    }
}
</i18n>

<script>
import image from '../assets/images/galerija/galerija 01.jpg';
import image2 from '../assets/images/galerija/galerija02.jpg';
import image3 from '../assets/images/galerija/galerija03.jpg';
import image4 from '../assets/images/galerija/galerija04.jpg';
import image5 from '../assets/images/galerija/galerija05 fotogrāfs Jānis Saliņš.jpg';
import image6 from '../assets/images/galerija/galerija06.jpg';
import image7 from '../assets/images/galerija/galerija07.jpg';
    export default {
        data() {
            return {
                activePic: image,
                pictures: [
                    image,
                    image2,
                    image3,
                    image4,
                    image5,
                    image6,
                    image7
                ]
            }
        },
        methods: {
            changeActiveImage(index) {
                this.activePic = this.pictures[index];
            }
        }
    }
</script>