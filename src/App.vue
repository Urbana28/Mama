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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  max-width: 100%;
  background: linear-gradient(#ff3c00, #ff4400, #ffcc00);
  display: flex;
  align-items: center;
  justify-content: center;

  .app--content {
    max-width: 960px;
    margin: 0 auto;
    height: 540px;
    /*border: 3px solid green;*/
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 562px){
      max-width: 562px;
      height: 1218px;
    }


  }
}

</style>
