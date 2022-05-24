<template>
  <div class="page-title">
    <h1>GitHub Public Repos</h1> {{items.length}} results for {{author}}'s {{type}} repositories sorted by last {{sort}}
  </div>

  <div class="item" v-for="(item, index) in items">
    <div class="details">
      <h3>{{index+1}}. 
        <a target="_blank" :href="item.html_url">{{item.name}}</a>
      </h3>
      <span class="topics" v-if="item.topics.length > 0">
        Topics: {{item.topics.join(', ')}}<br/>
      </span>
      {{item.description}}
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'

// Github API Docs: https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user
const repoListData = {
  type: 'sources', 
  sort: 'pushed',
  items: []
}
export default ({
  name: 'RepositoryListComp',
  props: ['author'],
  data() {
    return repoListData
  },
  mounted: function(e) {
    this.getList(this.author)
  },
  watch: {
    author: {
      handler(newValue, oldValue) {
        if (newValue != oldValue) {
          console.log('RL 0th: Update user repos for '+newValue)
          this.getList(newValue)
        }
      }
    }
  },
  methods: {
    getList(author) {
      let listApi = 'https://api.github.com/users/'+author+'/repos?type='+this.type+'&sort='+this.sort
      axios.get(listApi).then((response) => {
        this.items = response.data
        console.log('RL 1th: List '+response.data.length+' repositories for '+author)
      }).catch(function (error) {
        console.error("RL 1th: Failed get repos", error)
      })
    }
  }
})
</script>

<style>
h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>