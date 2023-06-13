interface Props {
  title?: string;
  isFetching: boolean;
}
function ButtonPrimary({ title = "Sign In", isFetching }: Props) {
  return (
    <button
      className="btn bg-principal font-light"
      disabled={isFetching}
    >
      {title}
    </button>
  );
}

export { ButtonPrimary };
