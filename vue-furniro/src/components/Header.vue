<script setup>
</script>

<template>
    <header class="header">
        <div class="header__container">
            <a href="index.html" class="header__logo">
                <img src="/image/header/logo.svg" alt="Logo">
            </a>
            <div class="header__menu menu">
                <nav class="menu__body">
                    <ul class="menu__list">
                        <li class="menu__item">
                            <a href="index.html" class="menu__link">Home</a>
                        </li>
                        <li class="menu__item">
                            <a href="shop.html" class="menu__link">Shop</a>
                        </li>
                        <li class="menu__item">
                            <a href="about.html" class="menu__link">About</a>
                        </li>
                        <li class="menu__item">
                            <a href="contact.html" class="menu__link">Contact</a>
                        </li>
                    </ul>
                </nav>
                <button type="button" class="menu__icon icon-menu"><span></span></button>
            </div>
            <div class="header__menu-actions menu-actions">
                <nav class="menu-actions__body">
                    <ul class="menu-actions__list">
                        <li class="menu-actions__item">
                            <a href="#" class="menu-actions__link icon-profile"></a>
                        </li>
                        <li class="menu-actions__item actions-search__item">
                            <input type="text" class="actions-search__input">
                            <a href="#" class="menu-actions__link actions-search__link icon-search"></a>
                        </li>
                        <li class="menu-actions__item">
                            <a href="#" class="menu-actions__link icon-heart"></a>
                        </li>
                        <li class="menu-actions__item">
                            <a href="#" class="menu-actions__link icon-card"></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>