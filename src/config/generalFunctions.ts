import { DaysEnum, MonthEnum } from '../data/enums'
import { ConvertMiliseconds, DateDetails } from '../interfaces'

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
  static convertMillisecondsToTime(milliseconds:number):ConvertMiliseconds {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
  
    const remainingMilliseconds = milliseconds % 1000;
    const remainingSeconds = seconds % 60;
    const remainingMinutes = minutes % 60;
  
    return {
      milliseconds: remainingMilliseconds,
      seconds: remainingSeconds,
      minutes: remainingMinutes,
      hours: hours
    };
  }
}
