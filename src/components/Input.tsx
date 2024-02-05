type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = ({ value, handleChange }: InputProps) => {
  return <input type="text" value={value} onChange={handleChange} />;
};
// This is before we destructured from InputProps
// export const Input = (props: InputProps) => {
//   return (
//     <input type="text" value={props.value} onChange={props.handleChange} />
//   );
// };
