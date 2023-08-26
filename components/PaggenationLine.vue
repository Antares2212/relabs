<template>
  <div class="mx-auto mt-4">
    <el-pagination
      v-model:current-page="currentPage"
      :page-size="pageSize"
      layout="prev, pager, next"
      :total="totalUsers"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup>
  const { updatePage, totalUsers, pageSize } = defineProps(['updatePage', 'totalUsers', 'pageSize'])
  const currentPage = ref(1)

  const handleCurrentChange = (val) => updatePage(val)
</script>

<style scoped>

</style>
