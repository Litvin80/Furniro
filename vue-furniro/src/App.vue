<script setup>
  import Header from './components/Header.vue';
  import CategoriesCard from './components/CategoriesCard.vue';
  import ProductCard from './components/ProductCard.vue';
</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="page">
      <section class="page__hero hero">
        <div class="hero__container">
            <div class="hero__body">
              <div class="hero__title-block title-block">
                <div class="title-block__body">
                  <h3 class="title-block__sub-title">New Arrival</h3>
                  <h1 class="title-block__title">Discover Our <br> New Collection</h1>
                  <div class="title-block__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                  </div>
                  <a href="#" class="title-block__button">Buy NOW</a>
                </div>
              </div>
            </div>
        </div>
        <div class="hero__background">
            <img src="/image/hero/bg.jpg" alt="background">
        </div>
      </section>
      <section class="page__categories categories">
        <div class="categories__container">
          <h2 class="categories__title title">Browse The Range</h2>
          <p class="categories__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div class="categories__columns">
            <CategoriesCard image-url="/image/categories/dining.jpg" title="Dining" />
            <CategoriesCard image-url="/image/categories/living.jpg" title="Living" />
            <CategoriesCard image-url="/image/categories/bedroom.jpg" title="Bedroom" />
          </div>
        </div>
      </section>
      <section class="page__our-products our-products">
        <div class="our-products__container">
          <div class="our-products__title title">Our Products</div>
          <div class="our-products__cards">
            <ProductCard 
              image-url="/image/product/syltherine.png" 
              title="Syltherine" 
              desc="Stylish cafe chair" 
              :price="40" 
              :oldPrice="55"
              :is-discounts="true"
              discounts="-30%"
            />
            <ProductCard 
              image-url="/image/product/leviosa.png" 
              title="Leviosa"
              desc="Stylish cafe chair" 
              :price="40"
            />
            <ProductCard 
              image-url="/image/product/lolito.png" 
              title="Lolito" 
              desc="Luxury big sofa" 
              :price="220" 
              :oldPrice="299"
              :is-discounts="true"
              discounts="-50%"
            />
            <ProductCard 
              image-url="/image/product/respiro.png" 
              title="Respira" 
              desc="Outdoor bar table and stool" 
              :price="168" 
              :oldPrice="200"
              is-new="true"
            />
            <ProductCard 
              image-url="/image/product/grifo.png" 
              title="Grifo" 
              desc="Night lamp" 
              :price="130" 
            />
            <ProductCard 
              image-url="/image/product/muggo.png" 
              title="Muggo"
              desc="Small mug" 
              :price="99"
              is-new="true"
            />
            <ProductCard 
              image-url="/image/product/pingky.png" 
              title="Pingky" 
              desc="Cute bed set" 
              :price="224" 
              :oldPrice="280"
              :is-discounts="true"
              discounts="-50%"
            />
            <ProductCard 
              image-url="/image/product/potty.png" 
              title="Potty" 
              desc="Minimalist flower pot" 
              :price="89" 
              is-new="true"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>