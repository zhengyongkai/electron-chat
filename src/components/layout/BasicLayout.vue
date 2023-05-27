<template>
  <div class="tab-container">
    <div class="tab-left">
      <left-bar-layout />
    </div>
    <div class="tab-right">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LeftBarLayout from './LeftBarLayout.vue'
</script>

<style lang="scss" scoped>
.tab-container {
  @include common-layout-flex;
  .tab-left {
    @include box-fix;
    top: 0;
    bottom: 0;
  }
  .tab-right {
    @include box-fix;
    @include box-fix-all;
    left: 80px;
    flex: 1;
  }
}
</style>
