import { DaysEnum, MonthEnum } from '../data/enums'
import { DateDetails } from '../interfaces'

export class GeneralFuncions {
  static getDateDetails(date: Date = new Date()): DateDetails {
    return {
      datetime: date,
      ms: date.getTime(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      dayOfMonth: date.getDate(),
      dayOfWeek: date.getDay(),
      monthName: MonthEnum[date.getMonth()],
      dayOfWeekName: DaysEnum[date.getDay()],
      hours: date.getHours(),
      minutes: date.getMinutes()
    }
  }
}
