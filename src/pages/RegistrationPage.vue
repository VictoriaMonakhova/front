<template>
  <form @submit.prevent="onFormSubmit" class="registration-form auth-form">
    <div class="form-field">
      <label for="email">Email</label>
      <input v-model="email" id="email" type="text" required />
    </div>
    <div class="form-field">
      <label for="login">Логин</label>
      <input v-model="login" id="login" type="text" required />
      <!-- required - обязательный атрибут -->
    </div>
    <div class="form-field">
      <label for="password">Пароль</label>
      <input v-model="password" id="password" type="text" required />
    </div>
    <button class="submit-btn" type="submit">Зарегистрироваться</button>
    <div class="action-link">
      <span>Уже есть аккаунт?</span>
      <!-- span мелкие подписи но больше чем small -->
      <a @click="redirect" class="link-btn"> Войти</a>
    </div>
  </form>
</template>

<script>
import { doRegister } from "@/netClient/authService";

export default {
  name: "RegistationPage",
  data: () => ({
    email: "",
    login: "",
    password: "",
  }),
  methods: {
    async onFormSubmit() {
      try {
        const data = await doRegister(
          this.login.trim(), //trim убирает пробелы слева и справа
          this.password.trim(),
          this.email.trim()
        );
        console.warn({ data });
      } catch (error) {
        console.error({ error });
      }
      this.$router.push("/login");
    },
    redirect() {
      this.$router.push("/login");
    },
  },
};
</script>