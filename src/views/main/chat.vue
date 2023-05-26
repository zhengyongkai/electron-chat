<template>
  <div class="chat-container">
    <div class="chat-left">我是左边</div>
    <div class="chat-right">我是右边</div>
  </div>
</template>

<script lang="ts" setup>
// import { useI18n } from 'vue-i18n'
// const i18n = useI18n()
// const { t } = useI18n() // 实例
// i18n.locale.value = 'en'

// import { useStore } from 'vuex'
// // store等同于this.$store，setup中没有this，只能这个书写
// const store = useStore()
// console.log(store.state.user.username)
</script>

<style lang="scss" scoped>
.chat-container {
  @include common-layout-flex;
  .chat-left {
    width: 30%;
  }
  .chat-right {
    flex: 1;
  }
}
</style>
