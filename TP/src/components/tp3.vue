<template>
  <div>
    <h1>Formulaire de connexion</h1>

    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Nom d'utilisateur :</label>
        <input
          id="username"
          v-model="username"
          type="text"
          placeholder="Entrez votre nom d'utilisateur"
        />
      </div>

      <div>
        <label for="password">Mot de passe :</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Entrez votre mot de passe"
        />
      </div>

      <p v-if="password === ''">Le mot de passe est requis.</p>

      <button type="submit" v-show="username !== ''" v-if="password !== ''">Connexion</button>
    </form>
    <p v-if="welcomeMessage">{{ welcomeMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      welcomeMessage: '',
    }
  },
  methods: {
    handleSubmit() {
      const LOGIN = 'admin'
      const PASSWORD = '1234'

      if (this.username === LOGIN && this.password === PASSWORD) {
        this.welcomeMessage = `Bienvenue, ${this.username} !`
      } else {
        this.welcomeMessage = 'Identifiants incorrects.'
      }
    },
  },
}
</script>
