interface Props {
  id: string;
  type?: "text" | "password";
  placeholder?: string;
  className?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function InputTextSearch({
  id,
  type = "text",
  className = "input",
  handleChange,
  placeholder = "Enter your username or email",
}: Props) {
  return (
    <input
      type={type}
      autoComplete="off"
      className={`input ${className}`}
      name={id}
      id={id}
      //disabled={isFetching}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export { InputTextSearch };
