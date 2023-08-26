<template>
  <el-row>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4 mx-auto">
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
