<template>
  <div class="chat-container">
    <div class="chat-left">
      <div class="chat-search">
        <el-row>
          <el-col :span="20">
            <el-input v-model="form.search" placeholder="搜索" />
          </el-col>
          <el-col :span="1" :offset="1">
            <el-button type="info" :icon="Plus" circle />
          </el-col>
        </el-row>
      </div>
      <div class="chat-friend">
        <div style="height: 2000px">
          <div @click="onClick">点我聊天</div>
        </div>
      </div>
    </div>
    <div class="chat-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Plus } from '@element-plus/icons-vue'

const form = ref({
  search: ''
})
const router = useRouter()

function onClick() {
  router.push('/chat/123')
}
</script>

<style lang="scss" scoped>
.chat-container {
  @include hidden;
  @include common-layout-flex;
  height: 100%;
  .chat-left {
    @include padding-size-tb(2);
    @include common-layout-flex;
    flex-direction: column;
    width: 28%;
    height: 100%;
    border-right: 1px solid $--common-color-grey;

    .chat-search {
      @include padding-size-lr(1);
      margin-bottom: 16px;
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
    flex: 1;
    height: 100%;
  }
}
</style>
