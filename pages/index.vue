import { dateTime } from '@/utils/getDate'
<template>
  <div class="tables flex justify-between">
    <div class="flex flex-col w-auto">
      <TableUser :users="users" :handleDelete="handleDelete" />
      <PaggenationLine :updatePage="updatePage"/>
    </div>
    <el-table :data="events" style="width: 700px">
      <el-table-column prop="date" label="Дата" width="auto" />
      <el-table-column prop="event" label="Действие" width="auto" />
    </el-table>
  </div>
</template>

<script setup>
  const users = ref([])
  const params = ref({
    limit: 5,
    page: 1
  })
  const events = reactive([])
  
  const updatePage = (val) => {
    params.value.page = val
    getUsers()
  }

  const getUsers = async () => {
    users.value = await $fetch('https://fakestoreapi.com/carts?' + `limit=${params.value.limit}&page=${params.value.page}`)
  }

  const handleDelete = (userRow) => {
    const { fullTime } = dateTime()
    users.value = users.value.filter(user => user.id != userRow.id)
    events.push({date: fullTime, event: `Удален пользователь с id: ${userRow.id}`})
  }

  onMounted(getUsers)
</script>

<style scoped>
  .tables {
    display: flex;
    gap: 30px;
  }
</style>
