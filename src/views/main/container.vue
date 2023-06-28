<template>
  <div class="contact-container">
    <div class="contact-left">
      <div class="contact-search">
        <el-row>
          <el-col :span="19">
            <el-input v-model="form.search" :placeholder="t('form.search')" />
          </el-col>
          <el-col :span="1" :offset="1">
            <el-button circle>
              <svg-icon name="add-friend" :size="18"></svg-icon>
            </el-button>
          </el-col>
        </el-row>
      </div>
      <div class="contact-friend">
        <div style="height: 2000px">
          <div class="contact-setting">
            <el-button @click="onContactManage">
              <svg-icon name="contact-seting" :size="14"></svg-icon>
              <span>通讯录管理</span>
            </el-button>
          </div>
          <div v-for="value in friendList.keys()" :key="value">
            <div class="contact-group">{{ value }}</div>
            <user-card
              v-for="list in friendList.get(value)"
              :key="list.id"
              :user-info="list"
              @click="onChat(list)"
              :class="list.id === userData?.id ? 'chating' : ''"
            ></user-card>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-right">
      <contact ref="cantactRef"></contact>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getUserList } from '@/api/user'
import UserCard from '@/components/basic/userCard.vue'
import contact from '@/views/chat/contact.vue'
import { useI18n } from 'vue-i18n'
import { groupByPin } from '@/utils/common'

import type { UserInfo } from '@/types/user'
import type { ContactType } from '@/views/chat/contact.vue'

const { t } = useI18n()
const cantactRef = ref<ContactType>()
const userData = ref<UserInfo>()
const form = ref({
  search: ''
})
const friendList = ref<Map<string, UserInfo[]>>(new Map())

function onChat(user: UserInfo) {
  // router.push('/contact/contact/' + id)
  userData.value = user
  cantactRef.value?.loadData(user)
}

function onContactManage() {
  if (window.ipcRenderer) {
    window.ipcRenderer.send('window-new', {
      route: '/contact',
      width: 500,
      height: 500
    })
  }
}

onMounted(async () => {
  const { list } = await getUserList()
  const data = groupByPin(list, 'nickname') as Map<string, UserInfo[]>
  friendList.value = data
})
</script>

<style lang="scss" scoped>
.contact-container {
  @include hidden;
  @include common-layout-flex;
  height: 100%;
  .contact-left {
    @include padding-size-tb(2);
    @include common-layout-flex;
    flex-direction: column;
    width: 20%;
    height: 100%;
    border-right: 1px solid $--common-color-grey;

    .contact-search {
      @include box();
      @include padding-size-lr(1);
      margin-bottom: 16px;
      height: 32px;
      .el-button.is-circle {
        border-radius: 4px;
      }
    }

    .contact-friend {
      // @include padding-size-lr(1);
      @include y-scoll;
      flex: 1;
      background-color: $--common-color-grey;
      .contact-setting {
        @include padding();
        svg {
          margin-right: 12px;
        }
        button {
          @include padding();
          width: 100%;
          height: 40px;
        }
      }
      .contact-group {
        @include padding(4px, 8px, 4px, 8px);
        font-size: 12px;
        color: $--common-color-info;
      }
    }
  }
  .contact-right {
    flex: 1;
    height: 100%;
    // background-color: $--common-bgcolor-grey;
  }
  .chating {
    background-color: $--common-bgcolor-grey;
  }
}
</style>
