<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}
</style>

<script lang="ts" setup>
import { useStore } from 'vuex'

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const store = useStore()

const locale = store.state.locale.language === 'zh-CN' ? zhCn : en
</script>
