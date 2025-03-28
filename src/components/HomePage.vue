<template>
    <div class="home">
      <h1>Bem-vindo ao Sabiá o bot que pode te ajudar!</h1>
      <h3>Qual a sua duvida?</h3>
      <router-link to="/ia" class="router-linkr">Pergunte aqui!</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>

<style scoped>

.router-linkr {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
}
</style>