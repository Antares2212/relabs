import { validators } from "utils/validators"
<template>
  <div class="login-layout">
    <el-container>
      <el-main>
        <div class="flex justify-center items-center h-screen ">
          <FormAuth 
            :ruleForm="ruleForm" 
            :rules="rules"/>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'login'
  })
  
  const ruleForm = reactive({
    email: '',
    pass: ''
  })
  
  const rules = reactive({
    email: validators.email,
    pass: validators.pass,
  })
  
</script>

<style>
  .el-main {
    padding: 0 20px;
  }

  .el-form-item__label {
    color: #fff !important;
  }
</style>
