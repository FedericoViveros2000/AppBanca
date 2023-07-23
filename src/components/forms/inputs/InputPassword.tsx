import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

interface Props {
  type_input: string;
  disabled?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeTypeInput: () => void;
}
function InputPassword({
  type_input,
  handleChange,
  handleChangeTypeInput,
  disabled = false
}: Props) {
  return (
    <>
      <input
        className="input input__password"
        autoComplete="off"
        name="password"
        id="password"
        type={type_input}
        disabled={disabled}
        placeholder="Enter your password"
        onChange={handleChange}
      />
      {type_input === "text" ? (
        <BsEyeSlashFill
          className="fs-icon fw-normal"
          onClick={handleChangeTypeInput}
        />
      ) : (
        <BsEyeFill
          className="fs-icon fw-normal"
          onClick={handleChangeTypeInput}
        />
      )}
    </>
  );
}

export { InputPassword };
