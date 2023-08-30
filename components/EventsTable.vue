<!-- import { useWebSocket } from '@/utils/useWebSocket' -->
import { dateTime } from '@/utils/getDate'
<template>
  <el-table :data="events" style="width: 700px">
    <el-table-column prop="ctime" label="Дата" width="auto" />
    <el-table-column prop="event" label="Действие" width="auto" />
  </el-table>
</template>

<script setup>
  const { getDataByTimestamp } = dateTime()
  const events = reactive([])  
  const data = ref([])
  
  onMounted(() => {
    const { getData, openSocket } = useWebSocket()
    openSocket()
    getData(data)
    watch(() => {
      return data.value.slice()
    }, (newVal, oldVal) => {
      const diff = newVal.filter(item => !oldVal.includes(item))
      events.push({ ctime: getDataByTimestamp(diff[0].ctime), event: diff[0].event })
    })
  })

  onBeforeUnmount(() => {
    const { closeSocket } = useWebSocket()
    closeSocket()
  })
  
</script>

<style scoped>

</style>
