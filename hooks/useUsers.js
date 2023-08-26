export const useUsers = () => {
  const users = ref([])
  const loading = ref(true)
  const params = ref({ 
    limit: 5, 
    page: 1, 
    offset: 0 
  })

  const getUsers = async () => {
    const queryParams = new URLSearchParams(params.value)
    try {
      loading.value = true;
      const response = await fetch("https://test.relabs.ru/api/users/list?" + queryParams.toString());
  
      if (response.ok) {
        users.value = await response.json();
      } else {
        console.error("Failed to get users, status:", response.status);
      }
    } catch (error) {
      console.error("Failed to get users:", error);
    } finally {
      loading.value = false;
    }
  }

  const handleDelete = (userRow) => {
    users.value.items = users.value.items.filter(user => user.id != userRow.id)
  }

  const updatePage = (val) => {
    params.value = {
      limit: 5,
      page: val,
      offset: val == 1 ? 0 : (val - 1) * params.value.limit
    }
    getUsers()
  }

  onMounted(() => {
    getUsers()
  })
  
  return {
    getUsers,
    handleDelete,
    updatePage,
    loading,
    users
  }
}
