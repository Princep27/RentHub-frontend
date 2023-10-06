import LoginContextProvider from "./context/LoginContext";
import Home from "./pages/home/Home";

function App() {
  return (
    <LoginContextProvider>
      <Home/>
    </LoginContextProvider>
  );
}

export default App;
