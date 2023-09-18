import react from '../assets/success_img.png'
import { debitTrans } from './movements'
import {
  NOTIFICATIONS,
  TYPE_MOVEMENTS
} from '../interfaces/enums/notifications'

interface Props {
  cardBalance: string
  typeMovement: string
  message?: string
}

const notifications = async ({ cardBalance, typeMovement, message }: Props): Promise<void> => {
  Notification.requestPermission().then((result) => {
    if (result === NOTIFICATIONS.GRANTED) {
      if (typeMovement === TYPE_MOVEMENTS.DEBIT) {
        debitTrans({
          img: react,
          text: message ?? `Se ha acreditado una transferencia de ${cardBalance} a su cuenta`
        })
      }
    }
  }).catch(err => { console.log(err) })
}

export { notifications }
