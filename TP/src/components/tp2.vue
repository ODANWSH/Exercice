<template>
  <div>
    <input v-model="message" placeholder="Écris quelque chose" />

    <button :style="{ backgroundColor: message ? 'green' : 'red' }" @click="handleClicks()">
      Afficher
    </button>
    <p>Valeur entrée : {{ affichage }}</p>
    <p>Compteur de clics : {{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      affichage: '',
      count: 0,
    }
  },
  methods: {
    afficher() {
      this.affichage = this.message
    },
    addToCount() {
      this.count++
    },
    handleClicks() {
      this.afficher()
      this.addToCount()
    },
  },
}
</script>
