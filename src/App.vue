<template>
  <div id="app">
    <div class="app--content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">

 * {
   box-sizing: border-box;
 }

 body {
   margin: 0;
   padding: 0;
 }

 @font-face {
   font-family: 'Proxima Nova';
   src: url("../src/assets/Proxima Nova2/ProximaNova/ProximaNova-Regular.otf") format('opentype');
   font-weight: 400;

 }
 @font-face {
   font-family: 'Proxima Nova Bold';
   src: url("../src/assets/Proxima Nova2/ProximaNova/Proxima Nova Bold.otf") format('opentype');
   font-weight: 700;

 }
 @font-face {
   font-family: 'Proxima Nova Thin';
   src: url("../src/assets/Proxima Nova2/ProximaNova/Proxima Nova Thin.otf") format('opentype');
   font-weight: 300;
 }

 @font-face {
   font-family: 'Cooper Black';
   src: url("../src/assets/Cooper Black/Cooper Black") format('opentype');
   font-weight: 400;

 }


#app {
  font-family: "ProximaNova", sans-serif;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 100%;
  background: linear-gradient(#ff3c00, #ff4400, #ffcc00);
  display: flex;
  align-items: center;
  justify-content: center;

  .app--content {
    max-width: 960px;
    margin: 0 auto;
    border: 3px solid green;
    flex-grow: 1;
    display: flex;
   height: 100vh;
  }
}

</style>
