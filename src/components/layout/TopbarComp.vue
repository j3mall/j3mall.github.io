<script setup lang="ts">
import TopbarView from '@/views/layout/TopbarView.vue'
import { defineComponent } from 'vue'

const TopbarComp = defineComponent({
  render: TopbarView.render,
  data() {
    return {
      author: process.env.GITHUB_AUTHOR
    }
  },
  methods: {
    updateAuthor(event) {
      if (event.target.value.length > 0 && this.author !== event.target.value) {
        console.log("TODO: updateAuthor as " + event.target.value)
      }
    }
  }
})
</script>

<template>
  <TopbarComp />
</template>
