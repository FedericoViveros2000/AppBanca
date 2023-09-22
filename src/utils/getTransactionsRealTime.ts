import { type TransactionSucess } from '../interfaces/balance'
import { supabase } from '../supabase'

export const transactionsRealTime = async (): Promise<TransactionSucess> => {
  try {
    const { data, error } = await supabase
      .from('transactions')
      .select()
      .eq('account_to', 1)
      .limit(1)

    if (error !== null) throw new Error(error as unknown as string)
    return {
      success: true,
      amount: data[0]?.amount as string
    }
  } catch (err) {
    console.log(err)
  }

  return {
    success: false,
    amount: ''
  }
}
