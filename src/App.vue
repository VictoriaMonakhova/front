<template>
  <div class="main">
    <router-link to="/">
    to home page
    </router-link>
    <br/>
    <router-link to="/info">
    to info page
    </router-link>
    <br/>
    <router-view/>
  </div>
</template>

// <script>
// import HomePage from "@/pages/HomePage.vue";
// import InfoPage from "@/pages/InfoPage.vue"

// export default {
//     name: "App",
//     components: {
//     HomePage, InfoPage
//     },
//   };
// </script>
