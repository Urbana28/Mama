<template>
    <div class="btn-wrapper">
        <button>{{name}}</button>
    </div>
</template>

<script>
    export default {
        name: 'OutlineButton',
        props: {
            name: String
        }
    }
</script>

<style scoped lang="scss">
   .btn-wrapper {
       button {
           width: 100%;
           height: 30px;
           border-radius: 14.8px;
           border: solid 3px #ffcc00;
           color: #ffcc00;
           background: none;
           outline: none;
       }
   }
</style>