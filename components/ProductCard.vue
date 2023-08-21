<template>
  <div class="card">
    <div class="card__image">
      <div class="card__image--hide">Быстрый показ</div>
      <img src="https://vset-i.ru/assets/images/products/1376/1663417263.jpg" alt="phone">
    </div>
    <div class="card__body">
      <div class="card__price">
        <span>{{ product.price }}</span> $
      </div>
      <div class="card__description">
        Apple / Смартфон iPhone 12 Pro 128GB / 6.1" / 2532x1170 / OLED / 128 ГБ
      </div>
      <div class="card__stars">
        <Icon v-for="star in 5" :key="star" name="ic:baseline-star" />
        <span>87</span>
      </div>
      <div class="card__split">
        Рассрочка 0-0-6
      </div>
      <div class="card__footer">
        <div class="card__btn">
          В корзину
        </div>
        <div class="card__like">
          <Icon name="icon-park-outline:like" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product'])
</script>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    height: auto;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 0 10px 1px #00000013;
  }

  .card__image {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    transition: all .5s ease;
  }

  .card__image--hide {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 5px 10px;
    background-color: #ffffffb9;
    border-radius: 20px;
    cursor: pointer;
    z-index: 99;
  }

  .card__image:hover .card__image--hide {
    display: block;
  }

  .card__image:hover img {
    opacity: 0.5;
  }

  .card__image img {
    width: 100%;
    object-fit: contain;
  }
  
  .card__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
  }

  .card__price {
    font-size: 18px;
    font-weight: bold;
  }

  .card__description {
    font-size: 15px;
    color: #9b9699;
  }

  .card__stars {
    display: flex;
    align-items: center;
  }

  .card__stars span {
    margin-left: 10px;
  }

  .card__split {
    display: flex;
    justify-content: center;
    max-width: 180px;
    width: auto;
    margin: 15px 0;
    font-size: 14px;
    font-weight: 500;
    padding: 8px 12px;
    border-radius: 20px;
    text-transform: uppercase;
    background: #D2FFE8;
    background: linear-gradient(90deg, #D2FFE8, #EBFF52);
  }

  .card__footer  {
    display: flex;
    align-items: center;
  }

  .card__footer .card__btn {
    padding: 5px 15px;
    background: purple;
    color: #fff;
    border-radius: 20px;
    cursor: pointer;
    transition: all .3s ease;
  }

  .card__footer .card__btn:hover {
    background-color: rgba(128, 0, 128, 0.705);
  }

  .card__footer .card__like {
    display: flex;
    margin-left: 15px;
    font-size: 24px;
    cursor: pointer;
    transition: all .3s ease;
  }

  .card__footer .card__like:hover {
    color: #f00;
  }
</style>
