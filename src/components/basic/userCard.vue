<template>
  <div class="chat-user-card border-bm">
    <div class="chat-user-avatar">
      <el-avatar shape="square" size="middle" :src="props.userInfo.avatar" />
    </div>
    <div class="chat-user-name">
      {{ props.userInfo.nickname }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { UserInfo } from '@/types/user'

const props = defineProps<{
  userInfo: UserInfo
}>()
</script>

<style lang="scss" scoped>
.chat-user-card {
  @include common-layout-flex-al;
  @include padding();

  // background-color: $--common-color-white;

  .chat-user-avatar {
    margin-right: 8px;
  }
  .chat-user-name {
    font-size: 14px;
  }
}
</style>
