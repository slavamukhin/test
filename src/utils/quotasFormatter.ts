import plural from 'plural-ru'
import { QuotaObject } from './../interfaces/model/quotaObject'
import { SECONDS_IN_DAY } from './../constants'

export const quotasFormatter = ({
  quota,
  quotaRenewalRate,
}: QuotaObject): string => {
  if (quota === 0 && quotaRenewalRate === 0) return ''

  if (quotaRenewalRate >= SECONDS_IN_DAY) {
    const days = Math.round(quotaRenewalRate / SECONDS_IN_DAY)

    return `${quota} за ${days} ${plural(days, 'день', 'дня', 'дней')}`
  }

  return `${quota} за ${plural(
    quotaRenewalRate,
    '%d секунду',
    '%d секунды',
    '%d секунд'
  )}`
}
