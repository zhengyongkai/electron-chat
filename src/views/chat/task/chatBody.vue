<template>
  <div>
    <title-bar title="管理列表" class="mb8">
      <el-button type="primary" size="small" @click="onHandleType('add')">添加任务</el-button>
    </title-bar>
    <div class="table-container mb8">
      <el-form :model="form" label-width="70px" class="el-form-search" ref="formEl">
        <el-row>
          <el-col :span="4">
            <el-form-item label="任务名称" prop="taskName">
              <el-input v-model="form.taskName" placeholder="请输入任务名称" />
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-form-item label="任务内容" prop="taskContent">
              <el-input v-model="form.taskContent" placeholder="请输入任务内容" />
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-form-item label="指派人" prop="pointer">
              <el-select v-model="form.pointer" @change="search">
                <el-option :value="0" label="我指派的" />
                <el-option :value="1" label="指派给我" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-form-item label="状态" prop="status">
              <dict-select
                dictParams="任务状态"
                dictQuery="任务状态"
                v-model="form.status"
                @change="search"
              />
            </el-form-item>
          </el-col>
          <el-col :span="3" :offset="2" class="text-right">
            <el-button @click="resetForm()">重置</el-button>
            <el-button type="primary" @click="search">查询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
  <div class="task-body">
    <div class="task-list">
      <div><h4>创建日期</h4></div>
      <div>
        <div
          :class="[taskHover === date.taskPointerTime ? 'hover' : '']"
          @click="onTaskHoverFn(date.taskPointerTime)"
          v-for="date in taskDate"
          :key="date.taskPointerTime"
        >
          <div>{{ date.taskPointerTime }}</div>
          <div>
            <el-tag>{{ date.count }}</el-tag>
          </div>
        </div>
      </div>
    </div>
    <div class="task-content">
      <div class="table-container" v-loading="propsRes.loading">
        <el-table :data="propsRes.data" border style="width: 100%" class="mb8">
          <el-table-column type="selection" width="55" align="center" />
          <el-table-column prop="taskName" label="任务名称" width="120">
            <template #default="scope">
              <el-Link type="primary" @click="showTask(scope.row)">{{
                scope.row.taskName
              }}</el-Link>
            </template>
          </el-table-column>
          <table-column-tips prop="taskContent" label="任务内容" />
          <table-column-tips
            :tips="false"
            prop="taskPointerTime"
            type="date"
            label="任务内容"
            width="120"
          />
          <el-table-column prop="taskPointerTime" label="指派时间" width="180" />
          <el-table-column prop="taskFinishTime" label="完成时间" width="180" />
          <el-table-column prop="taskPointerName" label="指派人" width="120" />
          <el-table-column prop="taskPointerToName" label="指派给" width="120" />
          <el-table-column prop="statusName" label="状态" width="90">
            <template #default="scope">
              <el-tag type="primary">{{ scope.row.statusName }} </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="handle" label="操作" width="120">
            <template #default="scope">
              <icon-button
                icon="upd"
                :size="24"
                @click="onHandleType('upd', scope.row)"
                content="修改"
                v-if="scope.row.status !== 1 && form.pointer === 0"
              ></icon-button>
              <icon-button
                icon="finish"
                :size="24"
                @click="onHandleType('finish', scope.row)"
                v-if="scope.row.status !== 1 && form.pointer === 1"
                content="完成"
              ></icon-button>
              <icon-button
                icon="delete"
                :size="24"
                @click="onHandleType('del', scope.row)"
                v-if="scope.row.status !== 1 && form.pointer === 0"
                content="删除"
              ></icon-button>
            </template>
          </el-table-column>
        </el-table>
        <div>
          <div class="text-right">
            <el-pagination
              background
              :page-sizes="[10, 20, 30, 50]"
              :current-page="propsRes.pagination.page"
              :page-size="propsRes.pagination.limit"
              layout="->,sizes, prev, pager, next"
              :total="propsRes.pagination.total"
              @size-change="propsEvent.pageSizeChange"
              @current-change="propsEvent.pageChange"
            />
          </div>
        </div>
      </div>
    </div>

    <el-drawer v-model="drawer" :append-to-body="true" :with-header="false">
      <div class="task-drawer">
        <h2>{{ taskIn?.taskName }}</h2>
        <div>任务指派人： {{ taskIn?.taskPointerName }}</div>
        <div>任务内容： {{ taskIn?.taskContent }}</div>
      </div>
    </el-drawer>

    <el-dialog v-model="showTaskDialog" width="40%">
      <div>
        <el-form :model="addForm" label-width="120px" ref="addFormRef">
          <el-form-item label="任务指派人" prop="taskPointerId">
            <el-select v-model="addForm.taskPointerId" ref="refs">
              <el-option
                v-for="item in userOptions"
                :key="item['id']"
                :label="item['nickname']"
                :value="item['id']"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="指派给" prop="taskPointerToId">
            <el-select v-model="addForm.taskPointerToId" ref="refs">
              <el-option
                v-for="item in userOptions"
                :key="item['id']"
                :label="item['nickname']"
                :value="item['id']"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="任务名称" prop="taskName">
            <el-input v-model="addForm.taskName" />
          </el-form-item>
          <el-form-item label="指派内容" prop="taskContent">
            <el-input v-model="addForm.taskContent" type="textarea" />
          </el-form-item>
          <el-form-item label="指派时间" prop="taskPointerTime">
            <el-date-picker
              v-model="addForm.taskPointerTime"
              value-format="YYYY-MM-DD HH:mm:ss"
              disabled
            />
          </el-form-item>
          <el-form-item label="完成时间" prop="taskFinishTime">
            <el-date-picker v-model="addForm.taskFinishTime" value-format="YYYY-MM-DD HH:mm:ss" />
          </el-form-item>
          <el-form-item label="状态" prop="status">
            <dict-select
              dictParams="任务状态"
              :disabled="true"
              dictQuery="任务状态"
              v-model="addForm.status"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
            <el-button @click="showTaskDialog = false">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { queryDate, queryTask, saveTask, delTask, finishTask } from '@/api/task'
import { getUserList } from '@/api/user'

import { UserInfo } from '@/types/user'
import type { taskInfo, taskDateList } from '../types/task'

import useTable from '@/hook/table'
import { FormInstance } from 'element-plus'

const { loadList, propsRes, propsEvent, setLoadListParams, formEl, resetForm } = useTable(queryTask)

const drawer = ref<boolean>(false)
const addFormRef = ref<FormInstance>()
const taskIn = ref<taskInfo>()
const showTaskDialog = ref<boolean>(false)
const taskDate = ref<taskDateList>([])
const taskHover = ref<string>()
const form = ref({
  taskName: '',
  taskContent: '',
  taskPointerTime: '',
  pointer: 0,
  status: null
})
const addForm = ref({
  taskName: '',
  taskPointerId: '',
  taskFinishTime: '',
  taskPointerTime: '',
  taskPointerToId: '',
  taskContent: '',
  status: 0,
  taskId: ''
})
const userOptions = ref<Array<UserInfo>>()

function showTask(value: taskInfo) {
  taskIn.value = value
  drawer.value = true
}

async function onHandleType(type: string, row?: any) {
  switch (type) {
    case 'add':
      addFormRef.value?.resetFields()
      showTaskDialog.value = true
      break
    case 'upd':
      addFormRef.value?.resetFields()
      addForm.value = Object.assign({}, row)
      showTaskDialog.value = true
      break
    case 'del':
      await delTask(row.taskId)
      getData()
      break
    case 'finish':
      await finishTask({ taskId: row.taskId })
      getData()
      break
  }
}

function onTaskHoverFn(date: string) {
  taskHover.value = date
  form.value.taskPointerTime = date
  setLoadListParams(form.value)
  loadList()
}

async function getData() {
  const data: taskDateList = await queryDate()
  taskDate.value = data
  await loadList()
}

function search() {
  setLoadListParams(form.value)
  loadList()
}

async function onSubmit() {
  await saveTask(addForm.value)
  getData()
  showTaskDialog.value = false
}

onMounted(async () => {
  taskHover.value = dayjs(new Date()).format('YYYY-MM-DD')
  form.value.taskPointerTime = taskHover.value
  setLoadListParams(form.value)
  const data = await getUserList()
  userOptions.value = data.list as UserInfo[]
  addForm.value.taskPointerTime = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
  await getData()
})
</script>

<style lang="scss">
.task-body {
  @include common-layout-flex;
  height: calc(100% - 110px);
  overflow: hidden;
  .task-list {
    background-color: $--common-bgcolor-white;
    margin-right: 8px;
    width: 12%;
    height: 100%;
    overflow: auto;
    > :first-child {
      padding: 0 12px;
      padding-bottom: 10px;
      height: 56px;
      line-height: 70px;
    }
    > :last-child {
      > div {
        @include common-layout-flex;
        flex-direction: row;
        font-size: 14px;
        height: 48px;
        line-height: 48px;
        padding: 0 12px;
        &.hover {
          background-color: $--common-bgcolor-blue-light-4;
          color: $--common-bgcolor-blue;
        }
        > :last-child {
          margin-left: auto;
        }
      }
    }
  }
  .task-content {
    background-color: $--common-bgcolor-white;
    flex: 1;
    height: 100%;
    overflow: auto;
  }
  .task-drawer {
    > {
      margin-bottom: 30px;
    }
    > :first-child {
      font-weight: 550;
    }
  }
}
</style>
