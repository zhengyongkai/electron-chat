<template>
  <div class="chat-body">
    <title-bar title="管理列表" class="mb8">
      <el-button type="primary" size="small" @click="showTaskDialog = true">添加任务</el-button>
    </title-bar>
    <div class="table-container">
      <el-table :data="tableData" border style="width: 100%" class="mb8">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="taskName" label="任务名称" width="180">
          <template #default="scope">
            <el-Link type="primary" @click="showTask(scope.row)">{{ scope.row.taskName }}</el-Link>
          </template>
        </el-table-column>
        <table-column-tips prop="taskContent" label="任务内容" />
        <table-column-tips
          :tips="false"
          prop="taskPoinerTime"
          type="date"
          label="任务内容"
          width="120"
        />
        <el-table-column prop="taskFinishTime" label="完成时间" width="120" />
        <el-table-column prop="taskPointerName" label="指派人" width="120" />
        <el-table-column prop="status" label="状态" width="90" />
        <el-table-column prop="handle" label="操作" width="100" />
      </el-table>
      <div>
        <el-pagination background layout="->,prev, pager, next" :total="1000" />
      </div>
    </div>

    <el-drawer v-model="drawer" :append-to-body="true" :with-header="false">
      <span>Hi there!</span>
    </el-drawer>

    <el-dialog v-model="showTaskDialog" width="40%">
      <span>This is a message</span>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { UserInfo } from '@/types/user'
import { taskList, taskInfo } from './types/task'

const tableData = ref<taskList>([])
const drawer = ref<boolean>(false)
const taskIn = ref<taskInfo>()
const showTaskDialog = ref<boolean>(false)

function showTask(value: taskInfo) {
  taskIn.value = value
  drawer.value = true
}

onMounted(() => {
  const user: UserInfo = {
    nickname: '张娟',
    id: 2,
    sex: 1,
    avatar: '',
    username: '张娟'
  }
  const user1: UserInfo = {
    nickname: 'zhengyongkai',
    id: 1,
    sex: 1,
    avatar: '',
    username: 'zhengyongkai'
  }
  let task: taskList = [
    {
      taskId: 1,
      taskFinishTime: '2023/06/28',
      taskName: '完成任务',
      taskPointer: user,
      taskPointerName: user1.nickname,
      taskContent: '请及时完成任务，任务是谢谢谢谢谢谢谢谢谢循序寻寻寻寻寻寻寻寻寻寻寻寻寻',
      taskPoinerTime: '2023/06/28',
      status: '正常'
    },
    {
      taskId: 1,
      taskName: '完成任务',
      taskPointer: user,
      taskPointerName: user1.nickname,
      taskContent: '请及时完成任务，任务是谢谢谢谢谢谢谢谢谢循序寻寻寻寻寻寻寻寻寻寻寻寻寻',
      taskPoinerTime: '2023/06/28',
      status: '正常'
    },
    {
      taskId: 1,
      taskName: '完成任务',
      taskPointer: user,
      taskPointerName: user1.nickname,
      taskContent: '请及时完成任务，任务是谢谢谢谢谢谢谢谢谢循序寻寻寻寻寻寻寻寻寻寻寻寻寻',
      taskPoinerTime: '2023/06/28',
      status: '正常'
    },
    {
      taskId: 1,
      taskName: '完成任务',
      taskPointer: user,
      taskPointerName: user1.nickname,
      taskContent: '请及时完成任务，任务是谢谢谢谢谢谢谢谢谢循序寻寻寻寻寻寻寻寻寻寻寻寻寻',
      taskPoinerTime: '2023/06/28',
      status: '正常'
    },
    {
      taskId: 1,
      taskName: '完成任务',
      taskPointer: user,
      taskPointerName: user1.nickname,
      taskContent: '请及时完成任务，任务是谢谢谢谢谢谢谢谢谢循序寻寻寻寻寻寻寻寻寻寻寻寻寻',
      taskPoinerTime: '2023/06/28',
      status: '正常'
    },
    {
      taskId: 1,
      taskName: '完成任务',
      taskPointer: user,
      taskPointerName: user1.nickname,
      taskContent: '请及时完成任务，任务是谢谢谢谢谢谢谢谢谢循序寻寻寻寻寻寻寻寻寻寻寻寻寻',
      taskPoinerTime: '2023/06/28',
      status: '正常'
    },
    {
      taskId: 1,
      taskName: '完成任务',
      taskPointer: user,
      taskPointerName: user1.nickname,
      taskContent: '请及时完成任务，任务是谢谢谢谢谢谢谢谢谢循序寻寻寻寻寻寻寻寻寻寻寻寻寻',
      taskPoinerTime: '2023/06/28',
      status: '正常'
    }
  ]
  tableData.value = task
})
</script>

<style lang="scss"></style>
