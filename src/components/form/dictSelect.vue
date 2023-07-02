<template>
  <div>
    <el-select v-model="value" ref="refs" v-bind="$attrs" clearable filter>
      <el-option
        v-for="item in options"
        :key="item['dictId']"
        :label="item['dictLabel']"
        :value="Number(item['dictValue'])"
      />
    </el-select>
  </div>
</template>

<style lang="scss" scoped></style>

<script lang="ts" setup>
import { dictType } from '@/types/dict'

const emit = defineEmits(['update:modelValue'])
const store = useStore()
const props = defineProps({
  api: {
    type: Object,
    require: true
  },
  modelValue: {
    type: String || Number
  },
  cache: {
    type: Boolean,
    default: true
  },
  dictParams: String,
  dictQuery: String
})

const options = ref<Array<dictType>>([])

let value = computed({
  get() {
    return props.modelValue !== undefined && props.modelValue !== null && props.modelValue !== ''
      ? Number(props.modelValue)
      : null
  },

  set(val) {
    emit('update:modelValue', val)
  }
})

async function loadData() {
  const data = await store.dispatch('getDict', {
    dictParams: props.dictParams,
    dictQuery: props.dictQuery
  })
  options.value = data
}

onMounted(() => {
  loadData()
})
</script>
