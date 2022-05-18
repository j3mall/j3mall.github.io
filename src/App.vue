<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue'
import * as DateTimeUtil from "@/utils/DateTime.js"
import HelloWorld from '@/components/HelloWorld.vue'

const myMixin = {
  created() {
    this.hello()
  },
  methods: {
    hello() {
      console.log('hello from mixin!')
    }
  }
}

const HelloWorldComp = defineComponent({
  mixins: [myMixin],
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
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorldComp />
      <!-- <HelloWorld msg="You did it!" /> -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';
@import '@/assets/application.css';
</style>
