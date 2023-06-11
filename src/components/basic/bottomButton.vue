<template>
  <div class="bottom-button">
    <lang></lang>
  </div>
</template>

<script lang="ts" setup>
import lang from '../main/lang.vue'
</script>

<style lang="scss" scoped>
.bottom-button {
  @include box-fix();
  bottom: 64px;
  right: 64px;
  > div {
    border: 1px solid $--common-color-blue;
    border-radius: 50%;
    padding: 8px;
  }
}
</style>
