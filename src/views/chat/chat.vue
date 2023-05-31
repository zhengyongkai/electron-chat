<template>
  <div class="chat-body" v-loading="loading">
    <div class="chat-body-header">
      {{ userInfo?.nickname }}
    </div>
    <div class="chat-body-content"></div>
  </div>
</template>

<script lang="ts" setup>
import { getUserById } from '@/api/user'
import type { UserInfo } from '@/types/user'

const route = useRoute()
const loading = ref<boolean>(false)
const query_id = ref(route.params.id)
const userInfo = ref<UserInfo>()

watchEffect(() => {
  query_id.value = route.params.id
  loadData()
})

async function loadData() {
  loading.value = true
  const data = await getUserById(query_id.value as string)
  userInfo.value = data as UserInfo
  loading.value = false
}

onMounted(async () => {
  loadData()
})
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
