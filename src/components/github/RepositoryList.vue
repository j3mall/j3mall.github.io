<template>
  <div class="page-title">
    <h1>GitHub Public Repos</h1> {{items.length}} results for {{author}}'s {{type}} repositories sorted by last {{sort}}
  </div>

  <div class="item" v-for="(item, index) in items">
    <div class="details">
      <h3>{{index+1}}. 
        <a target="_blank" :href="item.html_url">{{item.name}}</a>
      </h3>
      <span v-if="item.topics.length > 0">
        <span class="inline-title">Topics: </span>
        <span class="topics">
          {{item.topics.join(', ')}}<br/>
        </span>
      </span>
      <span v-if="item.homepage">
        <span class="inline-title">Homepage: </span>
        <span class="homepage">
          <a target="_blank" :href="item.homepage">{{item.homepage}}</a><br/>
        </span>
      </span>

      <span class="stars-count" v-if="item.stargazers_count > 0">
        <a :href="item.stargazers_url" class="pinned-item-meta Link--muted">
          <svg aria-label="stars" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star">
<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
</svg> {{item.stargazers_count}}
        </a>
      </span>
      {{item.description}}
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'

// Github API Docs: https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user
const repoListData = {
  type: 'source', 
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
        this.items = response.data.filter(function(hash) { return !hash.fork }) // fix source filter not working
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
.inline-title {
  font-style: oblique;
  font-weight: bolder;
}
</style>