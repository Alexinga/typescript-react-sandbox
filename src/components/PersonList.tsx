import { Name } from "./Person.Types";
type PersonListProps = {
  list: Name[];
};
export const PersonList = ({ list }: PersonListProps) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.first}>
          {item.first} {item.last}
        </li>
      ))}
    </ul>
  );
};
