<template>
  It's <TimerComp /> Now.
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import * as DateTimeUtil from "@/utils/DateTime.js"

const TimerComp = defineComponent({
  render: function(_ctx) {
    return this.timer;
  },
  data() {
    return {
      timer: ''
    }
  },
  mounted: function(e) {
    setInterval(() => {
      this.timer = DateTimeUtil.formatDate()
    }, 1000)
  }
})
</script>
