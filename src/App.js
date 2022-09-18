import "./App.css";
import Header from "./Components/Header"; // Header is a default export
import { Footer } from "./Components/Footer"; // Footer is a named export, {} required to import arrow functions
import { Home } from "./Components/Home/Home";

function App() {
  return (
    <div>
      <Header title="Todos List" searchBar={false}></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}
export default App;
