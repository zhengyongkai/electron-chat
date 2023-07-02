import { FunctionalComponent, h } from 'vue'

import { ElTooltip, ElLink } from 'element-plus'
import SvgIcon from '@/components/basic/svg.vue'

function IconButton(props: any, { $attrs }: { $attrs: any }) {
  const { content, placement = 'top', size = 16, icon, effect = 'dark', color = '#3376cd' } = props
  const $slots = h(SvgIcon, { name: icon, size, color })
  const children = h(
    ElTooltip,
    {
      effect,
      content: content,
      placement: placement,
      appendToBody: 'true'
    },
    $slots
  )

  return h(
    ElLink,
    {
      ...$attrs,

      class: 'icon-Button'
    },
    children
  )
}

IconButton.props = ['content', 'placement', 'icon', 'size', 'isImg', 'effect', 'offest', 'color']

export default IconButton as unknown as FunctionalComponent
