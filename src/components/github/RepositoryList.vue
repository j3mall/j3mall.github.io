<script setup lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
import RepositoryListView from '@/views/repository/ListView.vue'

// Github API Docs: https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user
const repoListData = {
  author: process.env.GITHUB_AUTHOR,
  type: 'sources', 
  sort: 'pushed',
  items: []
}
const RepositoryListComp = defineComponent({
  render: RepositoryListView.render,
  data() {
    return repoListData
  },
  mounted: function(e) {
    this.getList(this.author)
  },
  methods: {
    getList(author) {
      let listApi = 'https://api.github.com/users/'+author+'/repos?type='+this.type+'&sort='+this.sort
      axios.get(listApi).then((response) => {
        this.items = response.data
        console.log('List '+response.data.length+' repositories for '+author)
      })
    }
  }
})
</script>

<template>
  <RepositoryListComp />
</template>
