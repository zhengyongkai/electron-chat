<template>
  <div class="left-bar-container">
    <div class="left-bar-section">
      <div class="left-bar-avatar">
        <el-avatar shape="square" size="middle" :src="userInfo.avatar" />
      </div>
      <div class="left-bar-icons">
        <el-tooltip effect="dark" placement="right" :content="t('tips.chat')">
          <svg-icon name="chat"></svg-icon>
        </el-tooltip>
      </div>
      <div class="left-bar-icons">
        <el-tooltip effect="dark" placement="right" :content="t('tips.contacts')">
          <svg-icon name="contacts"></svg-icon>
        </el-tooltip>
      </div>
      <div class="left-bar-icons">
        <el-tooltip effect="dark" placement="right" :content="t('tips.fav')">
          <svg-icon name="fav"></svg-icon>
        </el-tooltip>
      </div>
      <div class="left-bar-icons">
        <el-tooltip effect="dark" placement="right" :content="t('tips.shop')">
          <svg-icon name="shop"></svg-icon>
        </el-tooltip>
      </div>
      <div class="left-bar-icons">
        <el-tooltip effect="dark" placement="right" :content="t('tips.see')">
          <svg-icon name="news"></svg-icon>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const store = useStore()
const userInfo = computed(() => {
  return store.state.user.userInfo
})
</script>

<style lang="scss" scoped>
.left-bar-container {
  @include hidden;
  width: 80px;
  height: 100%;
  background-color: $--common-bgcolor-black;
  color: $--common-color-white;
  .left-bar-section {
    @include align;
    @include padding-size-tb(4);
    height: 100%;
    width: 90%;
    .left-bar-avatar {
      @include margin(0, 0, 18px, 0);
    }
    .left-bar-icons {
      @include margin(0, 0, 18px, 0);
    }
  }
}
</style>
