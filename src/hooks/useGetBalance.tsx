import { useEffect, useState } from "react";
import { getTransactionsTypes } from "../utils/getDataCards";
import { TotalData } from "../interfaces/balance.types";

const useGetBalance = () => {
  const [isFetching, setIsFeching] = useState(false);
  const [balanceAmount, setBalanceAmount] = useState<TotalData>({
    total_credit: 0,
    total_debit: 0,
  });
  const transactionCredit = () => {
    setIsFeching(true);
    getTransactionsTypes({
      type_transaction: "Debit",
      id_customer: 29,
    })
      .then((total_debit) => {
        getTransactionsTypes({
          type_transaction: "Credit",
          id_customer: 29,
        }).then((total_credit) => {
          setBalanceAmount({
            total_credit: total_credit[0]?.total,
            total_debit: total_debit[0]?.total,
          });
        });
      })
      .finally(() => {
        setIsFeching(false);
      });
  };

  useEffect(() => {
    transactionCredit();
  }, []);

  return {
    balanceAmount,
    isFetching,
  };
};

export { useGetBalance };
