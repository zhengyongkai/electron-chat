<template>
  <div class="dialy-card">
    <div class="dialy-name">第一篇日记</div>
    <div class="dialy-bottom">
      <div class="dialy-date">2012/01/12</div>
      <div class="dialy-wait">代办：123</div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.dialy-card {
  @include padding();
  @include common-layout-flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
  margin-top: 8px;
  background-color: $--common-bgcolor-white;

  .dialy-name {
    font-size: 18px;
    font-weight: 550;
  }
  .dialy-bottom {
    @include common-layout-flex;
    justify-content: space-between;
    .dialy-date,
    .dialy-wait {
      font-size: 12px;
      color: $--common-color-info;
    }
  }
}
</style>
