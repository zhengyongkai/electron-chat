<template>
  <div class="chat-container">
    <!-- <div class="chat-left">
      <div class="chat-search">
        <el-row>
          <el-col :span="19">
            <el-input v-model="form.search" placeholder="搜索" />
          </el-col>
          <el-col :span="1" :offset="1">
            <el-button :icon="Plus" circle />
          </el-col>
        </el-row>
      </div>
      <div class="chat-friend">
        <div>
          <dialyCard />
          <dialyCard />
        </div>
      </div>
    </div> -->
    <div>
      <top-bar title="任务管理中心"></top-bar>
      <div class="chat-right">
        <chat-body ref="chatRef" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { Plus } from '@element-plus/icons-vue'
// import dialyCard from '@/components/basic/dialyCard.vue'
import chatBody from '../chat/chatBody.vue'
// const form = ref({
//   search: ''
// })
</script>

<style lang="scss" scoped>
.chat-container {
  @include hidden;
  // @include common-layout-flex;
  position: relative;
  height: 100%;
  .chat-left {
    @include padding-size-tb(2);
    @include common-layout-flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    border-right: 1px solid $--common-color-grey;

    .chat-search {
      @include box();
      @include padding-size-lr(1);
      margin-bottom: 16px;
      height: 32px;
      .el-button.is-circle {
        border-radius: 4px;
      }
    }

    .chat-friend {
      // @include padding-size-lr(1);
      @include y-scoll;
      flex: 1;
      background-color: $--common-color-grey;
    }
  }
  .chat-right {
    @include padding-size-lr(1);
    background-color: $--common-bgcolor-grey-dark-5;
    padding-top: 8px;
    flex: 1;
    // width: 100%;
    height: 100%;

    // background-color: $--common-bgcolor-grey;
  }
}
</style>
