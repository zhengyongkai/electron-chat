<template>
  <div>
    <el-dropdown @command="onChangeLang">
      <span class="el-dropdown-link"> {{ t('tips.changeLang') }} </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :command="lang.value" v-for="(lang, index) in LANGLIST" :key="index">
            <span :class="langs === lang.value ? 'select' : ''">{{ lang.name }}</span>
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
const { t } = useI18n()
const store = useStore()

const langs = computed({
  set(langs: string) {
    store.commit('setLanguage', langs)
    location.reload()
  },
  get() {
    return i18n.locale.value
  }
})

function onChangeLang(value: string) {
  langs.value = value
  i18n.locale.value = value
  // location.reload()
}
</script>

<style lang="scss" scoped>
.select {
  color: $--common-color-blue;
}
</style>
