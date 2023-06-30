<template>
  <div>
    <title-bar title="管理列表" class="mb8">
      <el-button type="primary" size="small" @click="showTaskDialog = true">添加任务</el-button>
    </title-bar>
    <div class="table-container mb8">
      <el-form :model="form" label-width="70px" class="el-form-search">
        <el-row>
          <el-col :span="5">
            <el-form-item label="任务名称">
              <el-input v-model="form.taskName" placeholder="请输入任务名称" />
            </el-form-item>
          </el-col>
          <el-col :span="5" :offset="1">
            <el-form-item label="指派时间">
              <el-input v-model="form.taskPoinerTime" placeholder="请选择指派时间" />
            </el-form-item>
          </el-col>
          <el-col :span="3" :offset="10" class="text-right">
            <el-button>重置</el-button>
            <el-button type="primary">查询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
  <div class="task-body">
    <div class="task-list">
      <div><h4>创建日期</h4></div>
      <div>
        <div class="hover">dasdasd</div>
        <div>dasdasd</div>
        <div>dasdasd</div>
        <div>dasdasd</div>
      </div>
    </div>
    <div class="task-content">
      <div class="table-container">
        <el-table :data="tableData" border style="width: 100%" class="mb8">
          <el-table-column type="selection" width="55" align="center" />
          <el-table-column prop="taskName" label="任务名称" width="180">
            <template #default="scope">
              <el-Link type="primary" @click="showTask(scope.row)">{{
                scope.row.taskName
              }}</el-Link>
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
import { taskList, taskInfo } from '../types/task'

const tableData = ref<taskList>([])
const drawer = ref<boolean>(false)
const taskIn = ref<taskInfo>()
const showTaskDialog = ref<boolean>(false)
const form = ref({
  taskName: '',
  taskPoinerTime: ''
})

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

<style lang="scss">
.task-body {
  @include common-layout-flex;
  .task-list {
    background-color: $--common-bgcolor-white;
    margin-right: 8px;
    width: 12%;
    > :first-child {
      padding: 0 12px;
      padding-bottom: 10px;
      height: 56px;
      line-height: 70px;
    }
    > :last-child {
      div {
        font-size: 14px;
        height: 48px;
        line-height: 48px;
        padding: 0 12px;
        &.hover {
          background-color: $--common-bgcolor-blue-light-4;
          color: $--common-bgcolor-blue;
        }
      }
    }
  }
  .task-content {
    background-color: $--common-bgcolor-white;
    flex: 1;
  }
}
</style>
