interface Header {
  title?: string;
  action?: string;
}
function HeaderSendMoney({ title, action }: Header) {
  return (
    <header className="bg-principal">
      <nav className="container__header flex space-between">
        <h1 className="font-light fs-normal-xl">{title}</h1>
        <p>{action}</p>
      </nav>
    </header>
  );
}

export { HeaderSendMoney };
