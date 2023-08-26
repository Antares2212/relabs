import { dateTime } from '@/utils/getDate'
<template>
  <el-table v-loading="loading" :data="users" style="width: 700px">
    <el-table-column prop="id" label="ID" width="80" />
    <el-table-column prop="name" label="Имя" width="120" />
    <el-table-column prop="role" label="Роль" width="auto" />
    <el-table-column label="Дата создания" width="auto">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          {{ getDataByTimestamp(scope.row.ctime) }}
        </div>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="Действия" width="120">
      <template #default="scope">
        <el-button type="danger" size="small" @click.prevent="handleDelete(scope.row)">
          Удалить
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
  defineProps(['users', 'handleDelete', 'loading'])
  const { getDataByTimestamp } = dateTime()
</script>

<style scoped>

</style>
