import { UserInfo } from '@/types/user'

export type taskInfo = {
  taskName: string
  taskId: number
  taskPointerName: string
  taskPointer: UserInfo
  taskFinishTime?: string
  taskPoinerTime: string
  taskContent: string
  status: string
}

export type taskList = taskInfo[]
