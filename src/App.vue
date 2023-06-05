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
import { useI18n } from 'vue-i18n'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const store = useStore()
const i18n = useI18n()

const locale = store.state.locale.language === 'zh-CN' ? zhCn : en

function initLang() {
  i18n.locale.value = store.state.locale.language
}

// function click() {
//   window.ipcRenderer.send('window-maximize')
// }
// console.log(ipcRenderer)
onMounted(() => {
  initLang()
})
</script>
