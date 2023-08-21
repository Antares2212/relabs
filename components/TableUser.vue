<template>
  <el-table :data="users" style="width: 700px">
    <el-table-column prop="id" label="ID" width="80" />
    <el-table-column prop="userId" label="Имя" width="120" />
    <el-table-column prop="date" label="Дата" width="auto" />
    <el-table-column fixed="right" label="Действия" width="120">
      <template #default="scope">
        <el-button type="danger" size="small" @click="handleDelete(scope.row)">
          Удалить
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
  const { users, handleDelete } = defineProps(['users', 'handleDelete'])
</script>

<style scoped>

</style>
