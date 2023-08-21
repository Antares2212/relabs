<template>
  <div class="mx-auto mt-4">
    <el-pagination
      v-model:current-page="currentPage"
      :page-size="10"
      layout="prev, pager, next"
      :total="100"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup>
  const { updatePage } = defineProps(['updatePage'])
  const currentPage = ref(1)

  const handleCurrentChange = (val) => {
    updatePage(val)
  }
</script>

<style scoped>

</style>
