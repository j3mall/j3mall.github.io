
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

<script lang="ts">
import axios from 'axios'

export default {
  props: ['author', 'search'],
  data() {
    return {
      user: {}
    }
  },
  beforeMount: function(e) {
    this.getUserInfo(this.search)
  },
  watch: {
    search: {
      handler(newValue, oldValue) {
        if (newValue != oldValue) {
          console.log('UC 0th: Update user info for '+newValue)
          this.getUserInfo(newValue)
        }
      }
    }
  },
  methods: {
    getUserInfo(keyword) {
      let newUser = {}
      let userApi = 'https://api.github.com/users/'+keyword
      var resp = axios.get(userApi).then((response) => {
        newUser = response.data
        console.log('UC 1th: User info for '+keyword+': ', newUser)
        if (newUser && newUser.login.length > 0) {
          this.user = newUser
          this.$parent.author = newUser.login
        }
      }).catch(function (error) {
        let errorMsg = 'User "'+keyword+'" not found'
        console.warn("UC 1th: "+errorMsg)
        alert(errorMsg)
      })
    }
  }
}
</script>

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
    text-align: center;
  }
}
</style>
