<template>
  <div v-loading="loading" class="contact-body magin-center">
    <template v-if="!userInfo">
      <div>
        <el-empty :description="t('contact.empty')" />
      </div>
    </template>
    <template v-else>
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
        <el-dropdown placement="bottom-start">
          <el-icon><MoreFilled /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>拉黑</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="text-align" style="margin-top: 24px">
        <el-button size="middle" type="success" @click="onChat">发消息</el-button>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'
import { UserInfo } from '@/types/user'
import { MoreFilled } from '@element-plus/icons-vue'
import router from '@/router'
export interface ContactType {
  loadData: (user: UserInfo) => null
}
</script>

<script lang="ts" setup>
const loading = ref<boolean>(false)
const userInfo = ref<UserInfo>()
const { t } = useI18n()

async function loadData(user: UserInfo) {
  loading.value = true
  userInfo.value = user as UserInfo
  loading.value = false
}

function onChat() {
  router.push('/chat?id=' + userInfo.value?.id)
}

defineExpose({
  loadData
})
</script>

<style lang="scss">
.contact-body {
  @include padding-size-lr(2);
  @include padding-size-tb(1);
  background-color: $--common-bgcolor-white;
  width: 300px;

  .contact-content {
    margin-top: 160px;
    @include common-layout-flex;
    @include padding-size-tb(1);
    > :first-child {
      margin-right: 16px;
    }
    > :nth-child(2) {
      @include common-layout-flex;
      justify-content: space-between;
      flex-direction: column;
      flex: 1;
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
