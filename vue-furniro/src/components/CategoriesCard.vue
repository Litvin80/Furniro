<script setup>
    defineProps({
        imageUrl: String,
        title: String,
    })
</script>

<template>
    <div class="categories__column">
        <div class="categories__item item-categories">
            <a href="#" class="item-categories__image">
                <img :src="imageUrl" alt="dining">
            </a>
            <div class="item-categories__link">
                <a href="#">{{title}}</a>
            </div>
        </div>
    </div>
</template>