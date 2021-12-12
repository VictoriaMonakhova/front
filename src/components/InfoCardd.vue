<template>
    <div class="base-card">
      <div class = "card_details">
        <div class = "name"> <b> Монахова Виктория Ивановна </b> </div>
        <div class = "group"> БСБО-06-19 </div>
        <div class = "photo"> <img src = "../assets/ph.jpg" width = "250px" hight = "250px" border = "3px" /> </div>
        <div class = "text"> Мои умения: </div>
        <ul>
          <li> Основы C# </li>
          <li> <a href = "https://www.sololearn.com/profile/19714839" target = "_blank"> Основы HTML </a> </li>
          <li> Основы Java </li>
          <li> <a href = "https://steamcommunity.com/id/vika_masanya/" target = "_blank"> Средний уровень CS:GO </a> </li>
          <li> Средний уровень обработки фотографий </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'InfoCardd',
  props: {
    msg: String
  }
}
</script>

<style>
#main {
  display: block;
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:black;
  justify-content: center;
    align-items: center; 
}
@media only screen and (min-width: 1024px) {
  #main {
    display: flex;
  }
}
.base-card {
  padding: 25px 25px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  background: #00ff7f;
  border-radius: 8px;
}
.name {
  font-size: 1.25rem;
}
.group {
  font-weight: 700;
}
.card_details > div {
  margin: 10px 0;
}
.photo > img {
  border-radius: 8px;
  color:#00FFFF;
}
li {
  text-align: left;
}
</style>