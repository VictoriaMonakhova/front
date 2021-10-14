<template>
  <div id = "main">
    <div class = "base-card">
      <div class = "card_details">
        <div class = "name"> <b> Монахова Виктория Ивановна </b> </div>
        <div class = "group"> БСБО-06-19 </div>
        <div class = "photo"> <img src = "./assets/ph.jpg" width = "250px" hight = "250px" border = "3px" /> </div>
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
    <div class = "base-card">
      <div class = "text_form"> <big> Форма обратной связи </big> </div>
      <form>
        <div class = "form-field">
          <input type = "text" placeholder = "Введите имя" id = "name" required />
        </div>
        <div class = "form-field">
          <input type = "text" placeholder = "Введите email" id = "mail" required />
        </div>
        <div class = "form-field">
          <textarea id = "text" placeholder = "Дополнительная информация" required></textarea>
        </div>
        <div class = "submit">
          <input type = "submit" value = "Отправить" />
        </div>
      </form>
    </div>
  </div>
</template>


<style>
#main {
  display: block;
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:blue;
}
@media only screen and (min-width: 1024px) {
  #main {
    display: flex;
  }
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
.text_form {
  margin: 10px;
  font-size: 1.25rem;
}
.submit > input {
  border: 1px solid black;
  background: #e7e9eb;
  border-radius: 10px;
  padding: 10px 15px;
  margin: 15px;
}
.submit > input:hover {
  border: 1px solid black;
  background: #bbbbbd;
  border-radius: 10px;
  padding: 10px 15px;
  margin: 15px;
}
.submit > input:active {
  border: 1px solid black;
  background: #bbbbbd;
  border-radius: 10px;
  padding: 15px px;
  margin: 15px;
}
.base-card {
  padding: 25px 25px;
  margin: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);  
  background: orange;
  border-radius: 8px;
}
.form-field input, textarea {
  outline: none;
  font-family: Roboto, Arial, sans-serif;
  width: 80%;
  margin: 5px;
  border: 2px solid black;
  border-radius: 12px;
  padding: 4px 28px;
}
.photo > img {
  border-radius: 8px;
}
li {
  text-align: left;
}
</style>