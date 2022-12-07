<template>
    <div class="page-header">
        <div class="wrap">
            <div class="header-logo">
                <img src="../assets/images/M.png">
            </div>
            <div class="header-links">
                <a href="#about" class="about">par</a>
                <a href="#history" class="history">vēsture</a>
            </div>
        </div>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;1,100;1,300&display=swap');
</style>

<script>
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    })
})
</script>