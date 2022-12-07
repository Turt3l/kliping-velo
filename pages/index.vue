<template>
  <div id="appContainer">
    <div class="preloader" id="preloader">
      <div class="loadingio-spinner-rolling-szinhhpaehi"><div class="ldio-h257o15lkpb">
        <img src="../assets/images/M.png" />
      <div></div>
      </div></div>
    </div>
    <Header />
    <LandingSection class="padding"/>
    <ContactMe/>
    <History id="history"/>
    <Footer/>
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
