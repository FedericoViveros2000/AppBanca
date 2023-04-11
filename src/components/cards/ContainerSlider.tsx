interface Props {
  children: JSX.Element;
}
const ContainerSlider = ({ children }: Props) => {
  return <ul className="container__target">{children}</ul>;
};

export default ContainerSlider;
