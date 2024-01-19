type PersonListProps = {
  list: {
    first: string;
  }[];
};
export const PersonList = (props: PersonListProps) => {
  return (
    <ul>
      {props.list.map((item) => (
        <li key={item.first}>{item.first}</li>
      ))}
    </ul>
  );
};
