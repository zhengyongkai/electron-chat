<template>
  <div class="left-bar-container">
    <div class="left-bar-section"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.left-bar-container {
  @include hidden;
  width: 80px;
  height: 100%;
  background-color: $--common-bgcolor-black;
  color: $--common-color-white;
  .left-bar-section {
    @include align;
    @include padding-size-tb(2);
    height: 100%;
    width: 90%;
  }
}
</style>
