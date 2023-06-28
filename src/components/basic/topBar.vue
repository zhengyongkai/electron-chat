<template>
  <div class="top-bar">
    <span>{{ props.title }}</span>
  </div>
</template>
<script setup>
const props = defineProps({
  // 數據
  title: {
    type: String,
    default: ''
  }
})
</script>
<style scoped lang="scss">
.top-bar {
  @include padding-size-tb(1);
  padding-left: 20px;
  height: 32px;
  line-height: 32px;
  position: relative;
  font-weight: 550;
  width: 100%;
  background-color: $--common-bgcolor-blue;
  color: $--common-color-white;
  span {
  }
}
</style>
