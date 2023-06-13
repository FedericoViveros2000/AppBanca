import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

interface Props {
  type_input: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeTypeInput: () => void;
}
function InputPassword({
  type_input,
  handleChange,
  handleChangeTypeInput,
}: Props) {
  return (
    <>
      <input
        className="input input__password"
        autoComplete="off"
        name="password"
        id="password"
        type={type_input}
        //disabled={isFetching}
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
