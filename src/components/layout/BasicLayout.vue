<template>
  <div class="tab-container">
    <div class="tab-left">
      <left-bar-layout />
    </div>
    <div class="tab-right">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <bottom-button />
  </div>
</template>

<script lang="ts" setup>
import LeftBarLayout from './LeftBarLayout.vue'
import bottomButton from '../basic/bottomButton.vue'
</script>

<style lang="scss" scoped>
.tab-container {
  @include common-layout-flex;
  @include box-fix;
  top: 0;
  bottom: 0;
  .tab-left {
    height: 100%;
  }
  .tab-right {
    @include box-fix;
    @include box-fix-all;
    left: 80px;
    flex: 1;
  }
}
</style>
