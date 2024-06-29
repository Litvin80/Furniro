<script setup>
    import { ref, onMounted } from 'vue';

    // Визначення пропсів компонента
    defineProps({
        imageUrl: String,
        title: String,
        desc: String,
        price: Number,
        oldPrice: Number,
        isDiscounts: Boolean,
        discounts: String,
        isNew: Boolean,
    });

    // Імпортуємо метод перевірки пристроя на тачскрін з utils.js
    import { isTouchDevice } from '../utils/utils.js';
    const isTouch = isTouchDevice();

    // Посилання на елементи
    const buttonRef = ref(null);
    const imageContainerRef = ref(null);

    // Якщо пристрій з тачскріном, переміщуємо кнопку в контейнер зображення
    onMounted(() => {
        if (isTouch && buttonRef.value && imageContainerRef.value) {
            imageContainerRef.value.appendChild(buttonRef.value);
            buttonRef.value.classList.add('button-on-mobile');
        }
    });
    
</script>

<template>
    <div class="our-products__card product-card">
        <div class="product-card__top">
            <div class="product-card__image" ref="imageContainerRef">
                <img :src="imageUrl" alt="product">
            </div>
        </div>
        <div class="product-card__status status-card__discounts" v-if="isDiscounts">{{discounts}}</div>
        <div class="product-card__status status-card__new" v-if="isNew">New</div>
        <div class="product-card__content">
            <h3 class="product-card__title">{{title}}</h3>
            <p class="product-card__description">{{desc}}</p>
            <div class="product-card__price">
                <span>{{price}}$</span>
                <del class="product-card__old-price" v-if="isDiscounts">{{oldPrice}}$</del>
            </div>
        </div>
        <a href="#" class="product-card__link"></a>
        <div class="product-card__action action-card" :class="{ 'action-card-on-mobile': isTouch }">
            <div class="action-card__body">
                <button ref="buttonRef" class="action-card__button button">Add to cart</button>
                <div class="action-card__items">
                <div class="action-card__item icon-share">Share</div>
                <div class="action-card__item icon-compare">Compare</div>
                <div class="action-card__item icon-heart">Like</div>
                </div>
            </div>
        </div>
    </div>
</template>