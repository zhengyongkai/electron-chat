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
          <div v-for="value in friendList" :key="value.id">
            <user-card :user-info="value" @click="onChat(value.id)"></user-card>
          </div>
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
import { getUserList } from '@/api/user'
import UserCard from '@/components/basic/userCard.vue'
import type { UserInfo } from '@/types/user'

const router = useRouter()
const form = ref({
  search: ''
})
const friendList = ref<Array<UserInfo>>([])

function onChat(id: number) {
  router.push('/chat/' + id)
}

onMounted(async () => {
  const { list } = await getUserList()
  friendList.value = list as UserInfo[]
})
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
    flex: 1;
    height: 100%;
  }
}
</style>
