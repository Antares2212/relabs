import { ref } from 'vue'
export default defineEventHandler(async event => {
  const data = ref([])
  const params = getQuery(event)

  try {
    const response = await fetch(
      "https://test.relabs.ru/api/users/list?" + params
    )

    if (response.ok) {
      data.value = await response.json()
    } else {
      console.error("Failed to get users, status:", response.status)
    }
  } catch (error) {
    console.error("Failed to get users:", error)
  }

  return {
    data
  }
})
