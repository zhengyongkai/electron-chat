import i18n from '@/locale'
import pin from 'tiny-pinyin'

const { t } = i18n.global

export function $t(msg: string): string {
  return t(msg)
}

// 根据返回字符串进行分组

export function groupByPin(arr: Array<any>, name: string): Map<string, object> {
  const resultMap = new Map()
  arr.forEach((item) => {
    const result = pin.convertToPinyin(item[name])
    const pre = result.substring(0, 1)
    if (resultMap.get(pre)) {
      resultMap.set(pre, [...resultMap.get(pre), item])
    } else {
      resultMap.set(pre, [item])
    }
  })
  return groupByKey(resultMap)
}

export function groupByKey(map: Map<string, object>) {
  const keys = []
  for (const key of map.keys()) {
    keys.push(key)
  }

  keys.sort()

  const newMap = new Map()
  keys.forEach((key) => {
    newMap.set(key, map.get(key))
  })

  return newMap
}
