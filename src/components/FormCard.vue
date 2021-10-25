<template>
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
</template>

<script>
export default {
  name: 'FormCard',
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
  color:blue;
}
@media only screen and (min-width: 1024px) {
  #main {
    display: flex;
  }
}
.text_form {
  margin: 10px;
  font-size: 1.25rem;
}
.submit > input {
  border: 1px solid blue;
  background: #e7e9eb;
  border-radius: 10px;
  padding: 10px 15px;
  margin: 15px;
}
.submit > input:hover {
  border: 1px solid blue;
  background: #bbbbbd;
  border-radius: 10px;
  padding: 10px 15px;
  margin: 15px;
}
.submit > input:active {
  border: 1px solid blue;
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
  border: 2px solid blue;
  border-radius: 12px;
  padding: 4px 28px;
}
</style>