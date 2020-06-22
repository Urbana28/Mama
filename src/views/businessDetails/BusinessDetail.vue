<template>
    <div class="business-container">
        <div>
            <HeaderSearch placeholder="Ask MAMA"/>
        </div>
        <div class="content">
                <div class="backArrow"><BackArrow path="/homepage"/></div>
            <div class="outer-btns">
                <div class="share"><img src="../../img/share.png" alt=""></div>
                <div class="bookmark"><img src="../../img/bookmark.png" alt=""></div>
            </div>
            <div class="info">
                <div class="info--titles">
                    <div class="name">Savoy Kitchen</div>
                    <div class="ethnicity">
                        <div class="ethnicity--flag"><img src="../../img/flag.png" alt=""></div>
                        <div class="ethnicity--name">$$$ Singaporean, Hainan</div>
                    </div>
                    <div class="signs"><b>Known For:</b> Hainan Chicken, Spaghetti, Soup, Bread</div>
                    <div class="mobileSlider">
                        <carousel autoplay="true" :scrollPerPage="true" perPage="1" paginationActiveColor="#ffcc00" paginationColor='#ffcc00'>
                            <slide>
                                <img src="../../img/dish.png" alt="">
                            </slide>
                            <slide>
                                <img src="../../img/dish.png" alt="">
                            </slide>
                            <slide>
                                <img src="../../img/dish.png" alt="">
                            </slide>
                        </carousel>
                    </div>
                    <div class="place">
                        <div class="place--info">
                            <div class="name">138 E Valley Blvd, Alhambra, CA 91801
                            </div>
                            <div class="site">
                                www.savoykitchen.com
                            </div>
                        </div>
                        <div class="place--mi">1.2mi</div>
                    </div>
                    <div class="timetable">Open – Closes 9:30pm</div>
                </div>
                <div class="slider">
                   <!-- <carousel class="custom-style" autoplay="true" :scrollPerPage="true" perPage="1" paginationActiveColor="#ffcc00" paginationColor='#ffcc00'>
                        <slide>
                            <img src="../../img/dish.png" alt="">
                        </slide>
                        <slide>
                            <img src="../../img/dish.png" alt="">
                        </slide>
                        <slide>
                            <img src="../../img/dish.png" alt="">
                        </slide>
                    </carousel>-->

                </div>
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
    </div>
</template>

<script>
    import Button from "../../components/button/Button";
    import OutlineButton from "../../components/button/OutlineButton";
    import HeaderSearch from "../../components/headers/HeaderSearch";
    import {Carousel, Slide} from 'vue-carousel';
    import BackArrow from "../../components/button/BackArrow";
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: 'BusinessDetail',
        components: {BackArrow, HeaderSearch, OutlineButton, Button, Carousel, Slide},
        data () {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets'
                    }
                }
            }
        },
        props: {
            dotStyle: {
                background: 'none',
                border: 'solid 1px #ffcc00'
            }
        }
    }
</script>

<style scoped lang="scss">

    .business-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;

        .content {
            position: relative;
            margin: 19px auto;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            width: 100%;

            .backArrow {
                display: none;

                @media screen and (max-width: 414px){
                    display: block;
                    position: absolute;
                    top: 18px;
                    left: -2px;

                    button {
                        background: none;
                        outline: none;
                        border: none;
                    }
                }

                @media screen and (max-width: 320px){
                    top: 60px;
                    left: -10px;
                }
            }

            .outer-btns {
               display: none;

                @media screen and (max-width: 414px){
                    display: flex;
                    position: absolute;
                    top: 20px;
                    right: 40px;

                    .bookmark {
                        margin-left: 20px;
                        button {
                            &:hover {
                                cursor: pointer;
                            }
                        }
                    }
                }
            }

            .info {
                display: flex;
                justify-content: center;

                &--titles {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin-right: 70px;

                    .name {
                        font-family: 'Lato', sans-serif;
                        font-size: 19px;
                        font-weight: 400;
                        line-height: 29.5px;
                        text-align: left;
                        color: #ffcc00;
                        margin-bottom: 7px;
                    }

                    .ethnicity {
                        display: flex;
                        margin-bottom: 8px;
                        align-items: center;

                        &--flag {
                            img {
                                width: 30px;
                                height: 20px;
                                margin-right: 11px;
                            }
                        }

                        &--name {
                            font-family: 'JosefinSans', sans-serif;
                            font-size: 11px;
                            font-weight: bold;
                            line-height: 11.5px;
                            text-align: left;
                            color: #ffcc00;
                        }
                    }

                    .signs {
                        margin-bottom: 10px;
                        font-family: 'Montserrat', sans-serif;
                        font-size: 10px;
                        font-weight: normal;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 11.5px;
                        letter-spacing: normal;
                        text-align: left;
                        color: #eef7ff;
                    }

                    .mobileSlider {
                        display: none;
                    }

                    .place {
                        display: flex;
                        margin-bottom: 10px;

                        &--info {
                           display: flex;
                            flex-direction: column;
                            margin-right: 60px;
                            .name {
                                font-family: 'Montserrat', sans-serif;
                                font-size: 10px;
                                font-weight: normal;
                                line-height: 11.5px;
                                text-align: left;
                                color: #ffd800;
                            }

                           .site {
                                font-family: 'Montserrat', sans-serif;
                                font-size: 10px;
                                font-weight: normal;
                                line-height: 11.5px;
                                text-align: left;
                                color: #ffd800;
                            }
                        }

                        &--mi {
                            font-family: 'Montserrat', sans-serif;
                            font-size: 9px;
                            font-weight: normal;
                            line-height: 11.5px;
                            text-align: center;
                            color: #ffcc00;
                        }
                    }

                    .timetable {
                        font-family: 'Montserrat', sans-serif;
                        font-size: 10px;
                        font-weight: normal;
                        line-height: 11.5px;
                        text-align: left;
                        color: #ffd800;
                    }

                }

                .slider {
                    width: 341px;
                    position: relative;

                    img {
                        width: 100%;
                        height: 279px;
                        border-radius: 5px;
                    }

                }

                @media screen and (max-width: 414px) {
                    flex-direction: column;
                    align-items: center;
                    margin-top: 50px;

                    &--titles {
                        margin-bottom: 17px;
                        margin-right: 0;

                        .name {
                            font-size: 25px;
                            line-height: 30px;
                            margin-bottom: 10px;
                        }

                        .ethnicity {
                            margin-bottom: 10px;
                            &--name {
                                font-size: 13.67px;
                                line-height: 16px;
                            }
                        }

                        .signs {
                            font-size: 12px;
                            margin-bottom: 10px;
                        }

                        .place {
                            margin-bottom: 10px;
                            &--info {
                                margin-right: 84px;
                                .name {
                                    font-size: 12px;
                                    line-height: 16px;
                                    width: 221px;
                                }
                                .site {
                                    font-size: 12px
                                }
                            }

                            &--mi {
                                font-size: 12px;
                            }
                        }

                        .timetable {
                            font-size: 12px
                        }

                        .mobileSlider {
                            display: block;
                            width: 341px;
                            margin-bottom: 27px;

                            img {
                                width: 329px;
                                height: 246px;
                                border-radius: 5px;
                            }
                        }
                    }

                    .slider {
                        display: none;
                    }
                }

                @media screen and (max-width: 376px) {

                    &--titles {
                        .name {
                            font-size: 25px;
                            line-height: 30px;
                            width: 200px;
                            margin-bottom: 0;
                        }

                        .signs {
                            margin-bottom: 16px;
                        }
                        .mobileSlider {
                            display: block;
                            width: 341px;
                            margin-bottom: 27px;

                            img {
                                width: 329px;
                                height: 245px;
                                border-radius: 5px;
                            }
                        }
                    }
                }

                @media screen and (max-width: 320px){

                    &--titles {
                        .mobileSlider {
                            img {
                                width: 304px;
                                height: 225px;
                            }
                        }
                    }
                }
            }

            .buttons {
                display: flex;
                flex-direction: column;
                margin-top: -148px;
                margin-left: 139px;

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

                @media screen and (max-width: 414px) {
                    margin-top: 20px;
                    margin-left: 0px;

                    .button-first-group {
                        justify-content: space-between;
                        .btn {
                            width: 156px;
                            text-align: center;
                            margin-right: 0;

                            .iconPhone {
                                img {
                                    width: 18px;
                                    height: 14px;
                                    top: 10.5px;
                                }
                            }

                            .icon {
                                img {
                                    width: 18px;
                                    height: 14px;
                                    top: 10.5px;
                                }
                            }
                        }
                    }

                    .button-second-group {
                        width: 332px;
                    }
                }

                @media screen and (max-width: 376px){
                    .button-first-group {
                        margin-bottom: 10px;
                    }
                }
            }
            @media screen and (max-width: 414px){
                align-items: center;
            }
        }
        @media screen and (max-width: 414px){
            background: #ff3c00;
        }
    }
</style>