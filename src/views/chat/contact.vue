<template>
  <div v-loading="loading" class="contact-body magin-center">
    <div class="contact-content">
      <div>
        <el-avatar shape="square" :size="64" :src="userInfo?.avatar" />
      </div>
      <div>
        <div>
          <div>{{ userInfo?.nickname }}</div>
          <div v-if="userInfo?.sex === 0"><svg-icon name="male"></svg-icon></div>
          <div v-if="userInfo?.sex === 1"><svg-icon name="man"></svg-icon></div>
        </div>
        <div>chatID：{{ userInfo?.id }}</div>
        <div>个性签名：{{ userInfo?.signature }}</div>
      </div>
    </div>
    <div class="text-align" style="margin-top: 24px">
      <el-button size="middle" type="success" @click="onChat">发消息</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getUserById } from '@/api/user'
import router from '@/router'
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

function onChat() {
  router.push('/chat/' + userInfo.value?.id)
}

onMounted(async () => {
  loadData()
})
</script>

<style lang="scss">
.contact-body {
  @include padding-size-lr(2);
  @include padding-size-tb(1);
  background-color: $--common-bgcolor-white;
  width: 360px;

  .contact-content {
    margin-top: 160px;
    @include common-layout-flex;
    @include padding-size-tb(1);
    > :first-child {
      margin-right: 16px;
    }
    > :last-child {
      @include common-layout-flex;
      justify-content: space-between;
      flex-direction: column;
      > :first-child {
        @include common-layout-flex-al;
        font-size: 16px;
        font-weight: 550;
        :first-child {
          margin-right: 8px;
        }
      }
      :not(:first-child) {
        font-size: 12px;
        color: $--common-color-info;
      }
    }
  }
}
</style>
