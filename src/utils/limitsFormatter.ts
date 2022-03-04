import plural from 'plural-ru'
import { LimitObject } from './../interfaces/model/limitObject'
import { SECONDS_IN_DAY } from './../constants'

export const limitsFormatter = ({ rate, period }: LimitObject): string => {
  if (rate === 0 && period === 0) return ''

  if (period >= SECONDS_IN_DAY) {
    const days = Math.round(period / SECONDS_IN_DAY)

    return `${rate} за ${days} ${plural(days, 'день', 'дня', 'дней')}`
  }

  return `${rate} за ${plural(period, '%d секунду', '%d секунды', '%d секунд')}`
}
