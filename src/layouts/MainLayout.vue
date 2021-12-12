<template>
  <div class="main-layout">
    <Navigation/>
    <div class="page-title"></div>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  name: "MainLayout",
  components: {
    Navigation,
  },
};
</script>

<style scoped>
.main-layout {
  width: 100%;
  max-width: 2000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
</style>