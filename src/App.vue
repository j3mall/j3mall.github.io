<script setup lang="ts">
import TopbarView from '@/views/TopbarView.vue'
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue'
import * as DateTimeUtil from "@/utils/DateTime.js"
import HelloWorld from '@/components/HelloWorld.vue'

const HelloWorldComp = defineComponent({
  render: HelloWorld.render,
  data() {
    return {
      msg: 'defineComponent!',
      timer: ''
    }
  },
  beforeMount: function(e) {
    setInterval(() => {
      this.timer = DateTimeUtil.formatDate()
    }, 1000)
  }
})

const TopbarComp = defineComponent({
  render: TopbarView.render,
  data() {
    return {
      GITHUB_URL: 'https://github.com/' + process.env.GITHUB_AUTHOR
    }
  }
})
</script>

<template>
  <div class="theme-container">
    <TopbarComp />

    <aside class="sidebar">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorldComp />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </aside>

    <main class="page">
      <RouterView />
    </main>
  </div>
</template>

<style>
@import '@/assets/base.css';
@import '@/assets/application.css';

.sidebar {
  width: 20rem;
  height: 70%;
  font-size: 16px;
  background-color: #fff;
  position: fixed;
  z-index: 10;
  margin: 6rem 1rem;
  top: 5rem;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  overflow-y: auto;
  text-align: center;
}

.page {
  display: block;
  padding: 4rem 1.5rem 2rem 20rem;
}
.page .item {
  margin-top: 2rem;
  display: flex;
}

@media (min-width: 1024px) {
  .page .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }
  .page .page-title {
    margin-top: 0;
    padding: 0.4rem 0 0rem calc(var(--section-gap) / 2);
  }
}
</style>
