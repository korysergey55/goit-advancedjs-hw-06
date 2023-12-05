/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek{
  Monday = "Weekdays",
  Tuesday = "Weekdays",
  Wednesday = "Weekdays",
  Thursday = "Weekdays",
  Friday = "Weekdays",
  Satuday = "Weekend",
  Sunday = "Weekend"
}

function isWeekend(day: DaysOfWeek): boolean {
   if (day === 'Weekend') {
    return true
  }
  return false
}
