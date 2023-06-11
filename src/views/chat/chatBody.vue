<template>
  <div class="chat-body" v-loading="loading">
    <div class="chat-body-header">
      {{ userInfo?.nickname }}
    </div>
    <div class="chat-body-content">
      <el-button @click="send"> </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import type { UserInfo } from '@/types/user'
export interface ChatType {
  loadData: (user: UserInfo) => null
}
</script>

<script lang="ts" setup>
const loading = ref<boolean>(false)
const userInfo = ref<UserInfo>()

async function loadData(user: UserInfo) {
  loading.value = true
  userInfo.value = user as UserInfo
  loading.value = false
}

defineExpose({
  loadData
})

function send() {
  //
}
</script>

<style lang="scss">
.chat-body {
  @include common-layout-flex;
  @include common-layout-flex-jc;
  height: 100%;
  flex-direction: column;
  .chat-body-header {
    @include box();
    @include padding-size-tb(2);
    @include padding-size-lr(2);
    margin-bottom: 16px;
    font-size: 18px;
    height: 52px;
  }
  .chat-body-content {
    @include y-scoll;
    flex: 1;
    background-color: $--common-bgcolor-grey;
  }
}
</style>
