import { Provider } from "react-redux";
import AllRouts from "./routes/AllRouts";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <AllRouts />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
