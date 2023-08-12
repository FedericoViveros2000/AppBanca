import react from '../assets/success_img.png'
import { debitTrans } from './movements'
import {
  NOTIFICATIONS,
  TYPE_MOVEMENTS
} from '../interfaces/enums/notifications.d.ts'

interface Props {
  cardBalance: string
  typeMovement: string
}

const notifications = async ({ cardBalance, typeMovement }: Props): Promise<void> => {
  Notification.requestPermission().then((result) => {
    if (result === NOTIFICATIONS.GRANTED) {
      if (typeMovement === TYPE_MOVEMENTS.DEBIT) {
        debitTrans({
          img: react,
          text: `Se ha acreditado una transferencia de ${cardBalance} a su cuenta`
        })
      }
    }
  }).catch(err => { console.log(err) })
}

export { notifications }
