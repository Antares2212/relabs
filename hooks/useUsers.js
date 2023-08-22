export const useUsers = () => {
  const users = ref([])
  const loading = ref(true)
  const params = ref({ limit: 5, page: 1 })

  const getUsers = async () => {
    try {
      loading.value = true
      users.value = await $fetch(`https://fakestoreapi.com/carts?limit=${params.value.limit}&page=${params.value.page}`)
    } catch (error) {
      console.error('Failed to get users:', error)
    } finally {
      loading.value = false
    }
  }

  const handleDelete = (userRow) => {
    users.value = users.value.filter(user => user.id != userRow.id)
    getUsers()
  }

  const updatePage = (val) => {
    params.value.page = val
    getUsers()
  }

  onMounted(getUsers)
  
  return {
    getUsers,
    handleDelete,
    updatePage,
    loading,
    users
  }
}
