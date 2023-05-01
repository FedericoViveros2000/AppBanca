import react from "../assets/success_img.png";
import { debitTrans } from "./movements";
import {
  NOTIFICATIONS,
  TYPE_MOVEMENTS,
} from "../interfaces/enums/Notifications";

interface Props {
  card_balance: number;
  type_movement: TYPE_MOVEMENTS.DEBIT | TYPE_MOVEMENTS.TRANSFER;
}

const notifications = ({ card_balance, type_movement }: Props) => {
  Notification.requestPermission().then((result) => {
    if (result === NOTIFICATIONS.GRANTED) {
      if (type_movement === TYPE_MOVEMENTS.DEBIT) {
        debitTrans({
          img: react,
          text: `Se ha acreditado una transferencia de ${card_balance} a su cuenta`,
        });
      }
    }
  });
};

export { notifications };
