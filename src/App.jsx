import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { ContextProvider } from "./Components/utils/global.context";
import Router from "./Routes/Router";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Router />
      </div>
    </ContextProvider>
  );
}

export default App;
