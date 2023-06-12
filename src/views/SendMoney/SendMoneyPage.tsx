import { HeaderSendMoney } from "./components/HeaderSendMoney";

function SendMoneyPage() {
  return (
    <article className="container__main bg-principal">
      <HeaderSendMoney
        title="Send money to"
        action="Cancel"
      />
    </article>
  );
}

export default SendMoneyPage;
