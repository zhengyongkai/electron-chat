<template>
  <div class="left-bar-container">
    <div class="left-bar-section">ddasd</div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.left-bar-container {
  @include hidden;
  width: 100px;
  height: 100%;
  background-color: $--common-bgcolor-black;
  color: $--common-color-white;
  .left-bar-section {
    @include padding-size-tb(1);
    @include padding-size-lr(0.5);
    height: 100%;
  }
}
</style>
