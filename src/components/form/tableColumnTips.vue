<template>
  <el-table-column :label="label" :width="labelWidth ? labelWidth : width" v-bind="$attrs">
    <template #default="scope">
      <div class="omitClass table-padding" :style="{ width: width + 'px' }">
        <div
          :class="type === 'price' || type === 'num' ? 'font-right ' : ''"
          style="position: relative"
        >
          <el-tooltip
            v-if="typeof tips === 'function' ? tips(scope) : tips"
            class="item"
            effect="dark"
            :content="message ? message(scope) : result(scope.row[prop])"
            placement="top"
            :append-to-body="false"
          >
            <slot v-if="$slots.default" name="default" :row="scope.row" index="scope.$index" />
            <span v-else> {{ message ? message(scope) : result(scope.row[prop]) }}</span>
          </el-tooltip>
          <div v-else>
            <slot v-if="$slots.default" name="default" :row="scope.row" index="scope.$index" />
            <span v-else> {{ message ? message(scope) : result(scope.row[prop]) }}</span>
          </div>
        </div>
      </div>
    </template>
  </el-table-column>
</template>

<script setup>
import dayjs from 'dayjs'

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  tips: {
    type: Boolean || Function,
    default: true
  },
  message: {
    type: Function
  },
  width: {
    type: Number
  },
  prop: {
    type: String
  },
  label: {
    type: String
  },
  labelWidth: {
    type: Number
  }
})

const formatType = function (type, value) {
  let result = value

  switch (type) {
    case 'date':
      result = dayjs(value).format('YYYY-MM-DD')
      break
    case 'dateTime':
      result = dayjs(value).format('YYYY-MM-DD HH:mm:ss')
      break
  }
  return result
}

const result = computed(() => (text) => {
  if (text) return formatType(props.type, text)
})
</script>

<style lang="scss" scoped>
.table-padding {
  box-sizing: border-box;
}
</style>
