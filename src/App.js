import "./App.css";
import { Background } from "./components/Background";
import { Logo } from "./components/Logo";
import Logo2 from "./assets/Logo-Dark.svg";

function App() {
  return (
    <div>
      {/* <img src={Logo2} alt='Storie.ai logo' /> */}
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
