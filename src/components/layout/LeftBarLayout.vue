<template>
  <div class="left-bar-container">
    <div class="left-bar-section">
      <el-avatar shape="square" size="middle" :src="userInfo.avatar" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'

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
  }
}
</style>
