import { ContactTransfer } from "./components/ContactTransfer";
import { HeaderSendMoney } from "./components/HeaderSendMoney";

function SendMoneyPage() {
  return (
    <section className="bg-principal container">
      <HeaderSendMoney title="Send money to" action="Cancel" />
      <ContactTransfer />
    </section>
  );
}

export default SendMoneyPage;
