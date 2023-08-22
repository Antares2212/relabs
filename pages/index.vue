<template>
  <div class="tables flex justify-between">
    <div class="flex flex-col w-auto">
      <TableUser :loading="loading" :users="users" :handleDelete="handleDelete" />
      <PaggenationLine :updatePage="updatePage"/>
    </div>
    <EventsTable />
  </div>
</template>

<script setup>
  import { useUsers } from '@/hooks/useUsers'

  const { loading, handleDelete, users, updatePage } = useUsers()
</script>

<style scoped>
  .tables {
    display: flex;
    gap: 30px;
  }
</style>
