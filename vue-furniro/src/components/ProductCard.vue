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
    const actionCardItemsRef = ref(null);
    const productCardContentRef = ref(null);
    const actionLikeRef = ref(null);

    // Якщо пристрій з тачскріном, переміщуємо кнопку в контейнер зображення
    onMounted(() => {
        if (isTouch) {
            if (buttonRef.value && imageContainerRef.value) {
                imageContainerRef.value.appendChild(buttonRef.value);
                buttonRef.value.classList.add('button-on-mobile');
            }
            if (actionCardItemsRef.value && productCardContentRef.value) {
                productCardContentRef.value.appendChild(actionCardItemsRef.value);
                actionCardItemsRef.value.classList.add('action-on-mobile');
            }
            if (actionLikeRef.value && imageContainerRef.value) {
                imageContainerRef.value.appendChild(actionLikeRef.value);
                actionLikeRef.value.classList.add('like-on-mobile');
            }
        }
    });
    
</script>

<template>
    <div class="our-products__card product-card">
        <div class="product-card__top" ref="imageContainerRef">
            <a href="#" class="product-card__image">
                <img :src="imageUrl" alt="product">
            </a>
        </div>
        <div class="product-card__status status-card__discounts" v-if="isDiscounts">{{discounts}}</div>
        <div class="product-card__status status-card__new" v-if="isNew">New</div>
        <div class="product-card__content" ref="productCardContentRef">
            <a href="#" class="product-card__title">{{title}}</a>
            <p class="product-card__description">{{desc}}</p>
            <div class="product-card__price">
                <span>{{price}}$</span>
                <del class="product-card__old-price" v-if="isDiscounts">{{oldPrice}}$</del>
            </div>
        </div>
        <a href="#" class="product-card__link"></a>
        <div class="product-card__action action-card">
            <div class="action-card__body">
                <button type="button" ref="buttonRef" class="action-card__button button">Add to cart</button>
                <div class="action-card__items" ref="actionCardItemsRef">
                    <button type="button" class="action-card__item icon-share">Share</button>
                    <button type="button" class="action-card__item icon-compare">Compare</button>
                    <button type="button" class="action-card__item icon-heart" ref="actionLikeRef">Like</button>
                </div>
            </div>
        </div>
    </div>
</template>