interface Props {
  children?: React.ReactNode;
}
export const Typography = ({ children }: Props): JSX.Element => {
  return <p className="ColorRed">{children}</p>;
};
