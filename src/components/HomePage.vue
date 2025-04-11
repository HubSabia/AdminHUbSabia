<template>
    <div class="home">
      <h1>Bem-vindo ao Hub Sabiá!</h1>

      <div class="features-container">

       <router-link to="/Campanhas" class="feature-link">
        <div class="feature-box">
            <h2>Gestão de Campanhas:</h2>
            <div class="box-visual">
              <samp class="plus-sign">+</samp>
            </div>
          </div>
       </router-link>
      </div>
    </div>

  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>

<style scoped>

.features-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;
}

 /* Adicione estilos para o router-link wrapper */
.feature-link {
  text-decoration: none; /* Remove sublinhado padrão do link */
  color: inherit; /* Faz a caixa herdar a cor do texto normal */
  display: block; /* Garante que o link ocupe o espaço corretamente */
}

.feature-box {
  width: 280px;
  /* Adicione cursor pointer aqui ou no :hover do link/box */
  /* cursor: pointer;  Opcional, o link já faz isso */
}

/* ... (restante dos estilos para h2, .box-visual, .plus-sign) ... */
 .feature-box h2 {
  font-size: 1.4rem;
  color: #555;
  margin-bottom: 15px;
}

.box-visual {
  width: 200px;
  height: 200px;
  background-color: white;
  border: 5px solid black;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease;
  cursor: pointer; /* Adicionado aqui para reforçar visualmente */
}

.feature-link:hover .box-visual { /* Efeito hover no link afeta o visual */
   transform: scale(1.03);
}

.plus-sign {
  font-size: 6rem;
  color: black;
  font-weight: lighter;
  line-height: 1;
  user-select: none;
}
</style>
