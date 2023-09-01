import { GREETINGS } from '../../interfaces/enums/greetings'
export const greeting = (): string => {
  const currentHour = new Date().getHours()
  if (currentHour >= 6 && currentHour < 12) return GREETINGS.MORNING
  if (currentHour >= 12 && currentHour < 18) return GREETINGS.AFTERNOON
  if (currentHour > 18 && currentHour < 21) return GREETINGS.EVENING
  return GREETINGS.NIGHT
}
