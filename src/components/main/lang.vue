<template>
  <div>
    <el-dropdown @command="onChangeLang">
      <span class="el-dropdown-link"> 点击切换语言 </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :command="lang.value" v-for="(lang, index) in LANGLIST" :key="index">
            {{ lang.name }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { LANGLIST } from '@/constant'

const i18n = useI18n()
const store = useStore()

function onChangeLang(e: string) {
  i18n.locale.value = 'en'
  store.commit('setLanguage', e)
  location.reload()
}
</script>

<style lang="scss" scoped></style>
