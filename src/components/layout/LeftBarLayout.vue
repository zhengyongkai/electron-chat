<template>
  <div class="left-bar-container">
    <div class="left-bar-section">
      <div class="left-bar-avatar">
        <el-popover placement="right" :width="280" popper-class="left-bar-popover">
          <template #reference>
            <el-avatar shape="square" size="middle" :src="userInfo.avatar" />
          </template>
          <div class="left-bar-popover">
            <div><el-avatar shape="square" size="large" :src="userInfo.avatar" /></div>
            <div>
              <div>
                <div>{{ userInfo.nickname }}</div>
                <div v-if="userInfo.sex === 0"><svg-icon name="male"></svg-icon></div>
                <div v-if="userInfo.sex === 1"><svg-icon name="man"></svg-icon></div>
              </div>
              <div>{{ userInfo.signature }}</div>
            </div>
          </div>
          <div class="text-align" style="margin-top: 8px">
            <el-button size="middle" type="primary">发消息</el-button>
          </div>
        </el-popover>
      </div>
      <div class="left-bar-icons" @click="onGo('/chat')">
        <el-tooltip effect="dark" placement="right" :content="t('tips.chat')">
          <svg-icon name="chat"></svg-icon>
        </el-tooltip>
      </div>
      <div class="left-bar-icons" @click="onGo('/contact')">
        <el-tooltip effect="dark" placement="right" :content="t('tips.contacts')">
          <svg-icon name="contacts"></svg-icon>
        </el-tooltip>
      </div>
      <div class="left-bar-icons" @click="onGo('/chat')">
        <el-tooltip effect="dark" placement="right" :content="t('tips.fav')">
          <svg-icon name="fav"></svg-icon>
        </el-tooltip>
      </div>
      <div class="left-bar-icons" @click="onGo('/chat')">
        <el-tooltip effect="dark" placement="right" :content="t('tips.shop')">
          <svg-icon name="shop"></svg-icon>
        </el-tooltip>
      </div>
      <div class="left-bar-icons" @click="onGo('/chat')">
        <el-tooltip effect="dark" placement="right" :content="t('tips.see')">
          <svg-icon name="news"></svg-icon>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { UserInfo } from '@/types/user'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()

const store = useStore()
const userInfo = computed<UserInfo>(() => {
  return store.state.user.userInfo
})

function onGo(path: string) {
  router.push(path)
}
</script>

<style lang="scss" scoped>
.left-bar-container {
  @include hidden;
  width: 80px;
  height: 100%;
  background-color: $--common-bgcolor-black;
  color: $--common-color-white;
  .left-bar-section {
    @include align;
    @include padding-size-tb(4);
    height: 100%;
    width: 90%;
    .left-bar-avatar {
      @include margin(0, 0, 18px, 0);
    }
    .left-bar-icons {
      @include margin(0, 0, 18px, 0);
    }
  }
}
.left-bar-popover {
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
    :last-child {
      font-size: 12px;
      color: $--common-color-info;
    }
  }
}
</style>
