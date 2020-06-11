<template>
    <div class="homepage-container">
        <div>
            <HeaderSearch placeholder="ASK mama" menuRight="70px" iconLeft="781px" width="535px"/>
        </div>
        <div class="content">
            <div class="inner">
                <div class="choice">
                    <div class="choice--ethnicity">
                       
                    </div>
                    <div class="choice--price">
                        <button>$</button>
                        <button>$$</button>
                        <button>$$$</button>
                        <button>$$$$</button>
                    </div>
                </div>
                <div class="restaurants">

                </div>

                <div class="map">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderSearch from "../../components/headers/HeaderSearch";
    export default {
        components: {HeaderSearch}
    }
</script>

<style scoped lang="scss">
    .homepage-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: white;

        .content {

            .inner {
                display: flex;
                justify-content: space-between;
                margin-left: 69px;
                margin-right: 69px;

                .choice {
                    width: 201px;
                    height: 452px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    background: rebeccapurple;

                    &--price {
                        button {
                            width: 47px;
                            height: 29px;
                            background: none;
                            outline: none;
                            border: none;
                            color: #8a98ba;
                            font-family: "Montserrat", sans-serif;
                            font-size: 7px;
                            font-weight: 600;
                            transition: .3s;

                            &:hover {
                                cursor: pointer;
                                background: #ffcc00;
                                color: #ff3c00;
                                transition: .3s;
                                border-radius: 4px;
                                box-shadow: 0px 10px 114px 0 rgba(0, 0, 0, 0.05);
                            }

                            &:active, &:focus {
                                background: #ffcc00;
                                color: #ff3c00;
                                transition: .3s;
                                box-shadow: 0px 10px 114px 0 rgba(0, 0, 0, 0.05);
                                border-radius: 4px;
                            }
                        }
                    }
                }

                .restaurants {
                    width: 374px;
                    background: royalblue;
                    height: 452px;
                }

                .map {
                    height: 452px;
                    width: 216px;
                    background: green;
                }
            }
        }
    }

</style>