import { validators } from "utils/validators"
<template>
  <div class="login-layout">
    <el-container>
      <el-main>
        <div class="flex justify-center items-center h-screen ">
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
              <el-input v-model="ruleForm.email" type="email" autocomplete="off"/>
            </el-form-item>
            <el-form-item label="Password:" prop="pass">
              <el-input v-model="ruleForm.pass" type="password" autocomplete="off"/>
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
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'login'
  })

  const router = useRouter()

  const ruleFormRef = ref()
  const isLoading = ref(false)

  const ruleForm = reactive({
    email: '',
    pass: ''
  })
  const rules = reactive({
    email: validators.email,
    pass: validators.pass,
  })

  const submitForm = async (formEl) => {
    const { data } = await useFetch('/api/auth', {
      method: 'post',
      body: ruleForm
    })
    
    if (!formEl || !data) return
    formEl.validate((valid) => {
      if (valid && data) {
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

<style>
  .el-main {
    padding: 0 20px;
  }

  .el-form-item__label {
    color: #fff !important;
  }
</style>
