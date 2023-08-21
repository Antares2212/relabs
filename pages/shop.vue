<template>
  <el-row>
    <div class="grid grid-cols-4 gap-5 mt-4">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </el-row>
</template>

<script setup>
  const products = ref([])
  const getProducts = async () => {
    products.value = await $fetch('https://fakestoreapi.com/products')
  }

  onMounted(getProducts)
</script>

<style scoped>
  
</style>
