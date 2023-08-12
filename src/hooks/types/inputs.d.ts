const INPUTS = {
  TEXT: 'text',
  PASSWORD: 'password'
} as const

interface Props {
  id: string
  name: string
  disabled?: boolean
  label: string
  placeholder?: string
  className?: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

type PropsOmit = Omit<Props, 'label'>

interface PropsInput extends PropsOmit {
  type?: string
}

export {
  type PropsInput,
  type Props,
  INPUTS
}
