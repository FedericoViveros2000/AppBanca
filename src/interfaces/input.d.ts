export interface PropInput {
  id: string
  name: string
  placeholder?: string
  className?: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
