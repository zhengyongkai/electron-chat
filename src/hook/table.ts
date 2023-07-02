import { ref } from 'vue'
import { FormContext } from 'element-plus'
import type { HttpResultList } from '@/types/http'

const pagination = {
  page: 1,
  limit: 10,
  total: 0,
  pages: 10
}

const formEl = ref<FormContext>()

export default function useTable(api: any) {
  const defaultProps = {
    loading: false,
    data: [] as unknown[],
    pagination: Object.assign({}, pagination),
    importDialog: false,
    exportDialog: false
  }

  const propsRes = ref(defaultProps)

  const setLoading = (status = false) => {
    propsRes.value.loading = status
  }

  const openImportDialog = () => {
    propsRes.value.importDialog = true
  }

  const openExportDialog = () => {
    propsRes.value.exportDialog = true
  }

  const closeExportDialog = () => {
    propsRes.value.exportDialog = false
  }

  const setPagination = (pageNum: number, total: number) => {
    propsRes.value.pagination.page = pageNum
    propsRes.value.pagination.total = total
  }

  const loadListParams = ref({})

  const setLoadListParams = (params: any) => {
    loadListParams.value = params
  }

  const resetForm = () => {
    if (formEl.value) {
      formEl.value.resetFields()
    }
    propsRes.value.pagination = Object.assign({}, pagination)
    loadList()
  }

  const loadList = async function () {
    setLoading(true)
    const targetApi = api
    const data: HttpResultList = await targetApi({
      ...propsRes.value.pagination,
      ...loadListParams.value
    })
    propsRes.value.data = data.list
    setPagination(data.page, data.total)
    setLoading(false)
    return data.list as unknown[]
  }

  const propsEvent = ref({
    pageChange: (pageNum: number) => {
      setPagination(pageNum, propsRes.value.pagination.total)
      loadList()
    },
    pageSizeChange: (pageSize: number) => {
      propsRes.value.pagination.page = 1
      propsRes.value.pagination.limit = pageSize
      loadList()
    }
  })

  return {
    propsRes,
    propsEvent,
    setLoading,
    loadList,
    setPagination,
    setLoadListParams,
    resetForm,
    formEl,
    openImportDialog,
    openExportDialog,
    closeExportDialog
  }
}
