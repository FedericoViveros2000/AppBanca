interface Props {
  text: string
  img: string
}

const debitTrans = ({ text, img }: Props) => {
  new Notification('Transferencia Exitosa', {
    body: text,
    icon: img
  })
}

export { debitTrans }
