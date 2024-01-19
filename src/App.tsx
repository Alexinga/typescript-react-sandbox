import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    {
      first: "Mikey",
    },
    {
      first: "Leo",
    },
    {
      first: "Don",
    },
    {
      first: "Ralph",
    },
  ];
  return (
    <div className="App">
      <Greet name="Alex" messageCount={12} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList list={nameList} />
      <Status status="success" />
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
    </div>
  );
}

export default App;
