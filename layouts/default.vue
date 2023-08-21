import { NuxtLink } from '../.nuxt/components';
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu 
          :default-active="$route.path"
          mode="horizontal"
          class="el-menu-horizontal-demo"
        >
          <el-menu-item index="/">
            <NuxtLink to="/">Home</NuxtLink>
          </el-menu-item>
          <el-menu-item index="/shop">
            <NuxtLink to="/shop">Shop</NuxtLink>
          </el-menu-item>
          <el-menu-item index="/login">
            <NuxtLink to="/login">Login</NuxtLink>
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

</script>

<style scoped>
    .router-link-exact-active {
      color: red;
    }
    
</style>
