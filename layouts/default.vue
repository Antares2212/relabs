import { NuxtLink } from '../.nuxt/components';
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu 
          @select="handleSelect"
          :default-active="$route.path"
          mode="horizontal"
          class="el-menu-horizontal-demo"
        >
          <el-menu-item index="/">
            Home
          </el-menu-item>
          <el-menu-item index="/shop">
            Shop
          </el-menu-item>
          <el-menu-item index="/login">
            Login
          </el-menu-item>
        </el-menu>
      </el-header>

      <el-container>
        <el-main>
          <slot/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
  const router = useRouter()
  const handleSelect = (key, keyPath) => {
    router.push(key)
  }
</script>

<style scoped>
    .router-link-exact-active {
      color: red;
    }
    
</style>
