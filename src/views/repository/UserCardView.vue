<template>
  <div class="user-panel">
    <img :title="user.login" class="avatar-user" :src="user.avatar_url" style="width: 150px; height: 150px; border-radius: 50%!important;" />

    <div class="user-infos">
      <h1 class="username">{{user.name}}</h1>
      Bio: {{user.bio}}
      <br/> {{user.followers}} followers · {{user.following}} following
      <a target="_blank" :href="user.blog">{{user.blog}}</a>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

.user-panel h1,
.user-panel h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .user-panel h1,
  .user-panel h3 {
    text-align: left;
  }
}
</style>
