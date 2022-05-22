
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

<style>
h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>
