import { ElNotification } from 'element-plus'

export const notification = (msg: string) => {
  return {
    show: function (type: '' | 'success' | 'warning' | 'error' | 'info') {
      ElNotification({
        message: msg,
        type
      })
    }
  }
}
