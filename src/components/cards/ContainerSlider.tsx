interface Props {
  children: JSX.Element;
}
function ContainerSlider({ children }: Props) {
  return <ul className="container__target scroll-none">{children}</ul>;
}

export { ContainerSlider };
