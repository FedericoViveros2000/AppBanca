import { useEffect, useState } from "react";
import { supabase } from "../supabase/index";
import { notifications } from "../utils/notifications";
import { TYPE_MOVEMENTS } from "../interfaces/enums/Notifications";
import { formatCurrency } from "../utils/formatCurrency";

interface realtimeProps {
  eventType: string;
  table: string;
}

const useRealtime = ({
  eventType = "UPDATE",
  table = "card_balance",
}: realtimeProps) => {
    
  let [data, setData] = useState({
    card_balance: 0
  });

  useEffect(() => {
    const realtimeBalance = supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          event: eventType,
          schema: "public",
          table: table,
        },
        (payload) => {
          setData({
            card_balance: payload.new?.card_balance,
          });
          notifications({
            card_balance: formatCurrency(payload.new?.card_balance),
            type_movement: TYPE_MOVEMENTS.DEBIT
          })
        }
      )
      .subscribe();
    return () => realtimeBalance.unsubscribe();
  }, []);

  return {
    data,
  };
};

export { useRealtime };
