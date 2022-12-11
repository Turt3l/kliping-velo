<template>
  <div>
    <div class="preloader" id="preloader">
      <div class="loadingio-spinner-rolling-szinhhpaehi"><div class="ldio-h257o15lkpb">
        <img src="../assets/images/M.png" />
      <div></div>
      </div></div>
  </div>
  <div id="appContainer">
    <Header />
    <LandingSection class="padding"/>
    <ContactMe/>
    <Timeline />
    <History id="history"/>
    <Gallery/>
    <Footer/>
  </div>
  </div>
</template>

<script>

setTimeout(function() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("appContainer").classList.add("visible");
}, 2000)

export default {
    name: "IndexPage"
}
</script>
