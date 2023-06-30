<template>
  <div class="card-title">
    <div>{{ props.title }}</div>
    <div>
      <slot></slot>
    </div>
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
.card-title {
  @include padding-size-tb(1);
  @include padding-size-lr(2);
  @include common-layout-flex-al;
  box-sizing: border-box;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  position: relative;
  font-weight: 550;
  width: 100%;
  // margin-top: -2px;
  // background-color: $--common-bgcolor-blue-light-5;
  &:before {
    content: '';
    border-radius: 4px;
    width: 5px;
    border-left: 5px solid $--common-color-blue;
    position: absolute;
    left: 0;
    height: 100%;
  }
  > :first-child {
    flex: 1;
  }

  > :last-child {
    margin-right: auto;
  }
}
</style>
