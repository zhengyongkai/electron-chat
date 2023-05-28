import i18n from '@/locale'

const { t } = i18n.global

export function $t(msg: string): string {
  return t(msg)
}
