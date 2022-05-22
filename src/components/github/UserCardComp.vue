<script setup lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
import UserCardView from '@/views/repository/UserCardView.vue'

const UserCardComp = defineComponent({
  render: UserCardView.render,
  data() {
    return {
      author: process.env.GITHUB_AUTHOR,
      user: {}
    }
  },
  beforeMount: function(e) {
    this.getUserInfo(this.author)
  },
  methods: {
    getUserInfo(author) {
      let userApi = 'https://api.github.com/users/'+author
      axios.get(userApi).then((response) => {
        console.log('Info for '+author+': ', response.data)
        this.user = response.data
      })
    }
  }
})
</script>

<template>
  <UserCardComp />
</template>
