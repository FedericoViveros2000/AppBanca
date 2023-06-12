import { Balance } from "./balance.types";
export interface Cards {
    id: number;
    card_color: string | null;
    card_supplier: string;
    card_title: string;
    card_balance: number;
    error: string | null;
}
