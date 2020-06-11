<template>
    <div class="popup-container">
        <div class="content">
            <div class="content--titles">
                <div class="main">
                    Why do you need <br>
                    to know this?</div>
                <div class="second">
                    We filter restaurants using <br> cultural context. When it comes <br> to authentic flavors, we know
                    <br> who gives the best recommendations.
                </div>
            </div>
            <div class="content--btn">
                <Button name="Got it, Let's do this."/>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "../button/Button";

export default {
    name: 'Popup',
    components: {Button}
}
</script>

<style scoped lang="scss">
  .popup-container {
      width: 265px;
      height: 207px;
      background: white;
      padding: 26px;

      .content {
          display: flex;
          flex-direction: column;

          &--titles {
              margin-bottom: 20px;
              .main {
                  font-family: "Montserrat", sans-serif;
                  font-size: 14px;
                  font-weight: bold;
                  font-stretch: normal;
                  font-style: normal;
                  line-height: 16.5px;
                  letter-spacing: normal;
                  text-align: center;
                  color: #000000;
              }

              .second {
                  font-family: "Montserrat", sans-serif;
                  font-size: 14px;
                  font-weight: normal;
                  font-stretch: normal;
                  font-style: normal;
                  line-height: 16.5px;
                  letter-spacing: normal;
                  text-align: center;
                  color: #000000;
              }
          }

          &--btn {
              width: 223px;
          }
      }
  }
</style>