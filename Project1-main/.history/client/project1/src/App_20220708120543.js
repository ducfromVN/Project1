import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreens from "./screens/HomeScreens";
import ProductScreens from "./screens/ProductScreens";
import CartScreens from "./screens/CartScreens";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      {/*Navbar*/}
      <Navbar></Navbar>
      {/*SideDrawer*/}
      {/*Backdrop*/}
      {/* <main>
        <Routes>
          <Route exact path="/" component={HomeScreens} />
          <Route exac path="/product/:id" component={ProductScreens} />
          <Route exact path="/cart" component={CartScreens} />
        </Routes>
      </main> */}
      {/*HomeScreen*/}
      {/*ProductScreen*/}
      {/*CartScreen*/}
    </Router>
  );
}

export default App;
