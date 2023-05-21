<template>
  <div></div>
</template>

<script lang="ts" setup>
import http from '@/utils/http'
http.get('/api/api/news/list', {}).then(() => {
  //
  // let { list } = res.data
})
</script>

<style lang="scss" scoped></style>
