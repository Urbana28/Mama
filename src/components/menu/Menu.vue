<template>
    <div>
        <input type="checkbox" id="checkbox" class="mobile-menu__checkbox">
        <label for="checkbox" class="mobile-menu__btn">
            <div class="mobile-menu__icon"></div>
        </label>
        <div class="mobile-menu__container">
            <ul class="mobile-menu__list">
                <li class="mobile-menu__item">
                    <router-link id="recommendation" to="/recommendA">Give recommendation</router-link>
                </li>
                <li class="mobile-menu__item">
                    <router-link id="invite" to="/inviteFriends">Invite Friends</router-link>
                </li>
                <li class="mobile-menu__item">
                    <router-link id="settings" to="#">Settings</router-link>
                </li>
                <li class="mobile-menu__item">
                    <router-link id="about" to="/about">About</router-link>
                </li>
                <li class="mobile-menu__item">
                    <router-link id="saved" to="#">Saved Restaurants</router-link>
                </li>
                <li class="mobile-menu__terms">
                    <router-link to="#">Terms & Conditions</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style scoped lang="scss">
    .mobile-menu__btn {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        cursor: pointer;
        transition: .4s;
    }
    .mobile-menu__icon {
        display: block;
        position: relative;
        background: #ffcc00;
        width: 90%;
        height: 3px;
        transition: .4s;
    }
    .mobile-menu__icon::after, .mobile-menu__icon::before {
        content: "";
        display: block;
        position: absolute;
        background: #ffcc00;
        width: 100%;
        height: 3px;
        transition: .4s;
        z-index: 1000;
    }
    .mobile-menu__icon::after {
        top: 8px;
    }
    .mobile-menu__icon::before {
        top: -8px;
    }
    .mobile-menu__container {
        position: absolute;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        height: 0;
        opacity: 1;
        transition: .5s;
        overflow: hidden;
        background-color: white;
    }
    .mobile-menu__list {
        transition: .5s;
        list-style: none;
        padding-left: 0;
        margin-top: -50px;
        display: flex;
        flex-direction: column;
        justify-content: center;

    }
    .mobile-menu__item {
        margin-bottom: 16px;
        border-radius: 30px;
        background-color: #ffcc00;
        width: 223px;
        font-size: 14px;
        font-family: "Montserrat", sans-serif;
        padding: 7.5px;
        transition: .3s;
        a {
            text-decoration: none;
            color: #ff3c00;
        }

        &:hover, &:active, &:focus {
            background-color: #ff3c00;
            cursor: pointer;
            transition: .3s;
            a {
                color: #ffcc00;
            }
        }
    }

    .mobile-menu__terms {
        background: none;
        a {
            text-decoration: none;
            color: #b6bed4;
            font-family: "Montserrat", sans-serif;
            font-size: 14px;
            line-height: 24px;
        }


    }


    .mobile-menu__checkbox {
        display: none;
    }
    .mobile-menu__checkbox:checked ~ .mobile-menu__nav {
        opacity: 1;
    }
    .mobile-menu__checkbox:checked ~ .mobile-menu__container {
        height: 100%;
    }
    .mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon {
        background: transparent;
    }
    .mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon::before, .mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon::after {
        top: 0;
    }
    .mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon::after {
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }
    .mobile-menu__checkbox:checked ~ .mobile-menu__btn .mobile-menu__icon::before {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }
</style>