<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    status-icon
    label-position="top"
    label-width="120px"
    style="width: 460px;"
  >
    <el-form-item label="Email:" prop="email">
      <el-input v-model="ruleForm.email" type="email" :disabled="isLoading" autocomplete="off"/>
    </el-form-item>
    <el-form-item label="Password:" prop="pass">
      <el-input v-model.trim="ruleForm.pass" type="password" :disabled="isLoading"  autocomplete="off"/>
    </el-form-item>
    <el-form-item>
      <el-button v-if="!isLoading" class="mx-auto my-3" type="primary" @click="submitForm(ruleFormRef)">
        Авторизация 
      </el-button>
      <el-button v-else class="mx-auto my-3" type="primary" loading>
        Loading
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
  const { ruleForm, rules } = defineProps(['ruleForm', 'rules'])

  const router = useRouter()
  
  const ruleFormRef = ref()
  const isLoading = ref(false)

  const submitForm = async (formEl) => {
    const { data } = await useFetch('/api/auth', {
      method: 'post',
      body: ruleForm
    })
    
    if (!formEl || !data) return
    formEl.validate((valid) => {
      if (valid) {
        isLoading.value = true
        setTimeout(async () => {
          isLoading.value = false
          router.push('/')
        }, 2000);
      } else {
        isLoading.value = false
        console.log('error submit!')
        return false
      }
    })
  }
</script>

<style lang="scss" scoped>

</style>
