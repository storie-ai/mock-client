import "./App.css";
import { Background } from "./components/Background";
import { Logo } from "./components/Logo";

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          height: "90vh",
        }}
      >
        <div style={{ width: "90%" }}>
          <Logo />
        </div>
      </div>
      <Background />
    </div>
  );
}

export default App;
