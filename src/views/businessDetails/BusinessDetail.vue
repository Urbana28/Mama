<template>
    <div class="business-container">
        <div>
            <HeaderSearch placeholder="Ask MAMA"/>
        </div>
        <div class="content">
            <div class="info">
                <div class="info--titles">
                    <div class="name">Savoy Kitchen</div>
                    <div class="ethnicity">
                        <div class="ethnicity--flag"><img src="../../img/flag.png" alt=""></div>
                        <div class="ethnicity--name">$$$ Singaporean, Hainan</div>
                    </div>
                    <div class="signs"><b>Known For:</b> Hainan Chicken, Spaghetti, Soup, Bread</div>
                    <div class="place">
                        <div class="place--name">138 E Valley Blvd, Alhambra, CA 91801
                            www.savoykitchen.com
                        </div>
                        <div class="place--mi">1.2mi</div>
                    </div>
                    <div class="timetable">Open – Closes 9:30pm</div>
                </div>
                <div class="buttons">
                    <div class="button-first-group">
                        <div class="btn">
                            <div class="iconPhone">
                                <img src="../../img/phone.png" alt="">
                            </div>
                            <OutlineButton name="Call"/>
                        </div>
                        <div class="btn">
                            <div class="icon">
                                <img src="../../img/plate.png" alt="">
                            </div>
                            <OutlineButton name="Online"/>
                        </div>
                    </div>
                    <div class="button-second-group">
                        <Button name="Give Recommendation" color='#fecc2f'/>
                    </div>
                </div>

            </div>
            <div class="slider">
                <carousel :scrollPerPage="true" :perPageCustom="[[960 ,1]]" paginationActiveColor="dotStyle" paginationColor='#ffcc00'>
                    <slide>
                        <img src="../../img/dish.png">
                    </slide>
                    <slide>
                        <img src="../../img/dish.png">
                    </slide>
                    <slide>
                        <img src="../../img/dish.png">
                    </slide>
                </carousel>

            </div>
        </div>
    </div>
</template>

<script>
    import Button from "../../components/button/Button";
    import OutlineButton from "../../components/button/OutlineButton";
    import HeaderSearch from "../../components/headers/HeaderSearch";
    import {Carousel, Slide} from 'vue-carousel';

    export default {
        name: 'BusinessDetail',
        components: {HeaderSearch, OutlineButton, Button, Carousel, Slide},
        props: {
            dotStyle: {
                background: 'none',
                border: 'solid 1px #ffcc00'
            }
        }
       /* methods: {
            buildSlideMarkup: (count) => {
                let slideMarkup = '';
                for (let i = 1; i <= count; i++) {
                   slideMarkup = '<slide><img src="../../img/dish.png" style="width: 338px; max-width: 100%;"></slide>'
                }
                return slideMarkup;
            }
        }*/
    }
</script>

<style scoped lang="scss">
    .business-container {
        width: 100%;
        display: flex;
        flex-direction: column;

        .content {
            margin: 20px 138px 0;
            flex-grow: 1;
            display: flex;
            justify-content: space-between;

            .info {
                display: flex;
                flex-direction: column;


                &--titles {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin-right: 97px;
                    margin-bottom: 90px;

                    .name {
                        font-family: CooperStd, sans-serif;
                        font-size: 18px;
                        font-weight: 900;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 29.5px;
                        letter-spacing: normal;
                        text-align: left;
                        color: #ffcc00;
                    }

                    .ethnicity {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 8px;

                        &--flag {
                            img {
                                width: 22px;
                                height: 15px;
                                margin-right: 8px;
                            }
                        }

                        &--name {

                            font-family: JosefinSans, sans-serif;
                            font-size: 9px;
                            font-weight: bold;
                            font-stretch: normal;
                            font-style: normal;
                            line-height: 11.5px;
                            letter-spacing: normal;
                            text-align: left;
                            color: #ffcc00;
                        }
                    }

                    .signs {
                        margin-bottom: 8px;
                        font-family: ProximaNova, sans-serif;
                        font-size: 9px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 11.5px;
                        letter-spacing: normal;
                        text-align: left;
                        color: #eef7ff;
                    }

                    .place {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 8px;

                        &--name {
                            font-family: ProximaNova, sans-serif;
                            font-size: 9px;
                            font-weight: normal;
                            font-stretch: normal;
                            font-style: normal;
                            line-height: 11.5px;
                            letter-spacing: normal;
                            text-align: left;
                            color: #ffd800;
                        }

                        &--mi {
                            font-family: ProximaNova, sans-serif;
                            font-size: 8.5px;
                            font-weight: normal;
                            font-stretch: normal;
                            font-style: normal;
                            line-height: 11.5px;
                            letter-spacing: normal;
                            text-align: center;
                            color: #ffcc00;
                        }
                    }

                    .timetable {
                        font-family: ProximaNova, sans-serif;
                        font-size: 9px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 11.5px;
                        letter-spacing: normal;
                        text-align: left;
                        color: #ffd800;
                    }
                }

                .buttons {
                    display: flex;
                    flex-direction: column;

                    .button-first-group {
                        display: flex;
                        text-align: center;
                        margin-bottom: 14px;

                        .btn {
                            width: 118px;
                            position: relative;
                            margin-right: 9px;

                            .iconPhone {
                                img {
                                    position: absolute;
                                    top: 8.5px;
                                    left: 34px;
                                }
                            }

                            .icon {
                                img {
                                    position: absolute;
                                    top: 8.5px;
                                    left: 24px;
                                }
                            }
                        }
                    }

                    .button-second-group {
                        width: 244px;
                    }
                }
            }

            .slider {
                width: 341px;

                img {
                    width: 100%;
                    height: 279px;
                    border-radius: 5px;
                }

                .VueCarousel {
                    .VueCarousel-wrapper {
                        position: relative !important;
                    }
                    .VueCarousel-pagination {
                        position: absolute !important;
                        left: 99px !important;
                        top: 203px !important;
                    }
                }
            }
        }
    }
</style>