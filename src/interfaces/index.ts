export interface DateDetails {
  datetime: Date;
  ms: number;
  month: number;
  year: number;
  dayOfMonth: number;
  dayOfWeek: number;
  monthName: string;
  dayOfWeekName: string;
  hours: number,
  minutes: number
}
export interface ConvertMiliseconds {
  milliseconds: number,
  seconds: number,
  minutes: number,
  hours: number
}