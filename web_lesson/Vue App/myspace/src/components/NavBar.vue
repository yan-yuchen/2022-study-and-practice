<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <router-link class="navbar-brand" :to="{name: 'home'}">Myspace</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'home'}">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'userlist'}">好友列表</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'userprofile'}">用户动态</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'login'}">登录</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'register'}">注册</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>


<script>
export default {
    name: "NavBar",
}
</script>

<style scoped>

</style>
