<template>
    <div class="popup-container">
        <div class="content">
            <div class="content--titles">
                <div class="main">
                    Why do you need <br>
                    to know this?</div>
                <div class="second">
                    We filter restaurants using <br>
                    cultural context. When it comes <br>
                    to authentic flavors, we know
                    <br> who gives the best recommendations.
                </div>
            </div>
            <div class="content--btn">
                <button v-on:click="callback(false)"> Got it, Let's do this.</button>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Popup',
    props: {
        callback: Function
    }
}
</script>

<style scoped lang="scss">
  .popup-container {
      width: 278px;
      height: 220px;
      background: white;
      border: solid 1px #707070;
      border-radius: 6px;
      padding: 26px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .content {
          display: flex;
          flex-direction: column;
          align-items: center;


          &--titles {
              margin-bottom: 20px;
              .main {
                  font-family: "Montserrat", sans-serif;
                  font-size: 14px;
                  font-weight: bold;
                  line-height: 17.5px;
                  text-align: center;
                  color: #000000;
                  margin-bottom: 9px;
              }

              .second {
                  font-family: "Montserrat", sans-serif;
                  font-size: 14px;
                  font-weight: normal;
                  line-height: 17.5px;
                  text-align: center;
                  color: #000000;
              }
          }

          &--btn {
              width: 223px;
              button {
                  font-family: "Montserrat", sans-serif;
                  font-weight: 400;
                  font-size: 12px;
                  height: 30px;
                  width: 100%;
                  outline: none;
                  border: none;
                  border-radius: 30px;
                  background: #ffcc00;
                  transition: .3s;
                  color: #fd3c1d;

                  &:active, &:focus {
                      transition: .3s;
                      background-color: #fd3c1d;
                      color: #ffd800;
                  }

                  &:hover {
                      transition: .3s;
                      cursor: pointer;
                      background-color: #fd3c1d;
                      color: #ffd800;

                  }
              }
          }
      }

      @media screen and (max-width: 414px) {
          width: 330px;
          height: 265px;
          .content {
              &--titles {
                  .main {
                      font-size: 16.6px;
                      line-height: 22.6px;
                  }

                  .second {
                      font-size: 16px;
                      line-height: 20px;
                  }
              }

              &--btn {
                  width: 295px;

                  button {
                      height: 40px;
                      font-size: 16.67px;
                  }
              }
          }
      }

      @media screen and (max-width: 320px){
          width: 279px;
          height: 254px;

          .content {

              &--titles {
                  .main {
                      font-size: 14.6px;
                      line-height: 20.6px;
                  }

                  .second {
                      font-size: 14px;
                      line-height: 18px;
                  }
              }

              &--btn {
                  width: 230px;

                  button {
                      height: 30px;
                      font-size: 14px;
                  }
              }
          }

      }
  }
</style>