import BodyContent from "./components/BodyContent";
import NavBar from "./components/NavBar";
import "./index.css";

function App() {
  return (
    <>
      <h1 className="heading">React Hooks</h1>
      <NavBar />
      <BodyContent>
        <button>Child - 01</button>
      </BodyContent>
      <BodyContent>
        <button>Child - 02</button>
      </BodyContent>
    </>
  );
}

export default App;
