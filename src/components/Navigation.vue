<template>
  <div id="navigation">
    <div class="nav_form">
      <div class="nav_links">
        <router-link to="/">
          <button class="nav_link">Список дел</button>
        </router-link>
        <router-link to="/info">
          <button class="nav_link">Инфо</button>
        </router-link>
      </div>
      <a @click="onLogoutClicked" class="nav_logout"> <b>Выход</b> </a>
    </div>
  </div>
</template>


<script>
import { doLogout } from "@/netClient/authService";
export default {
  name: "Navigation",
  methods: {
    async onLogoutClicked() {
      try {
        await doLogout();
        this.$router.push("/login");
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>


<style scoped>
#navigation {
  top: 0;
  left: 0;
  width: 100%;
  background-color: seagreen;
  align-items: center;
  display: flex;
  justify-content: center;
  position: -webkit-sticky;
  position: sticky;
  box-shadow: 0px 4px 6px 6px darkgreen;
  padding: 2px 0px;
  z-index: 5000;
}
.nav_form {
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1000px;
  padding: 15px 24px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.nav_links {
  padding: 12px 50px;
  background-color: #42b983;
  border: none;
  margin: 0px 50px;
  border-radius: 10px;
  font-size: 12pt;
  box-shadow: 0px 0px 4px 2px black;
}

.nav_links:hover {
  background-color: transparent;
  box-shadow: none;
}
.nav_logout {
  background-color: #42b983;
  padding: 12px 50px;
  margin: 0px 0px;
  border-radius: 10px;
  box-shadow: 0px 0px 4px 2px black;
  color: white;
}

.nav_logout:hover {
  background-color: transparent;
  box-shadow: none;
}

.router-link-exact-active > button {
  background-color: rgb(15, 23, 32);
  color: white;
}
</style>