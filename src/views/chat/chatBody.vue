<template>
  <div class="chat-body" v-loading="loading">
    <div class="chat-body-header">
      <div class="chat-body-header-name">
        {{ userInfo?.nickname }}
      </div>
      <div class="chat-body-header-sign">
        {{ userInfo?.signature }}
      </div>
    </div>
    <div class="chat-body-content"></div>
    <div class="chat-body-bottom"></div>
  </div>
</template>

<script lang="ts"></script>

<script lang="ts" setup>
import type { UserInfo } from '@/types/user'

export interface ChatType {
  loadData: (user: UserInfo) => null
}
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
</script>

<style lang="scss">
.chat-body {
  @include common-layout-flex;
  @include common-layout-flex-jc;
  position: relative;
  height: 100%;
  flex-direction: column;
  .chat-body-header {
    @include box();
    @include padding-size-tb(1);
    @include padding-size-lr(2);
    margin-bottom: 16px;

    height: 52px;
    .chat-body-header-name {
      font-size: 16px;
    }
    .chat-body-header-sign {
      color: $--common-color-info;
      margin-top: 8px;
      font-size: 12px;
    }
  }
  .chat-body-content {
    @include y-scoll;
    flex: 1;
    background-color: $--common-bgcolor-grey;
  }
  .chat-body-bottom {
    height: 180px;
  }
}
</style>
