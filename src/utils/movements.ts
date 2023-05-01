interface Props {
    text: string;
    img: string;
}

const debitTrans = ({
    text,
    img
}: Props) => {
  let notification = new Notification("Transferencia Exitosa", {
    body: text,
    icon: img,
  });
};

export {
    debitTrans
}
