<template>

    <div class="content">
      <div class="desk" >
        <img class="pic" src="../img/logo-mob.png" alt="">
      </div>
      <!--<div class="mob" >
        <img src="../img/logo-mob.png" alt="">
      </div>-->
    </div>


</template>

<script>


    export default {
        name: 'HelloWorld',
      methods: {
          mount: (el, parent) => {
            let percent;
            return percent = (el / parent) * 100
          }
      }
    }
</script>


<style scoped lang="scss">
    .content {
        display: flex;
        flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      width: 100%;

        .desk {
            .pic {
                display: block;
                width: 44.375%;
            }
        }
    }
</style>
