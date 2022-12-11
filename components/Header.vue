<template>
    <div class="page-header">
        <div class="wrap">
            <div class="header-logo">
                <img src="../assets/images/M.png">
            </div>
            <div class="header-links">
                <nuxt-link :to="switchLocalePath('lv')" class="about" v-if="$i18n.locale == 'en'">lv</nuxt-link>
                <nuxt-link :to="switchLocalePath('en')" class="about" v-if="$i18n.locale == 'lv'">en</nuxt-link>
            </div>
        </div>
    </div>
</template>

<i18n>
    {
        "lv": {
            "par": "par",
            "vēsture": "vēsture"
        },
        "en": {
            "par": "about",
            "vēsture": "history"
        }
    }
</i18n>


<script>
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    })
})
</script>

<!-- <template>
    <div class="page-header">
        <div class="wrap">
            <div class="header-logo">
                <img src="../assets/images/M.png">
            </div>
            <div class="header-links">
                <nuxt-link v-if="$i18n.locale == 'lv'" :to="switchLocalePath('en')">ENG</nuxt-link>
                <nuxt-link v-if="$i18n.locale == 'en'" :to="switchLocalePath('lv')">LV</nuxt-link>      
            </div>
        </div>
    </div>
</template>

<i18n>
    {
        "lv": {
            "par": "par",
            "vēsture": "vēsture"
        },
        "en": {
            "par": "about",
            "vēsture": "history"
        }
    }
</i18n>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,300&display=swap');
</style>

<script>
import Vue from 'vue'
export default {
    methods: {
        toggleLanguages () {
            
        }
    }
}
</script> -->