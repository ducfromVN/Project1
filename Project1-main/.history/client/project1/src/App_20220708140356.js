import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreens from "./screens/HomeScreens";
import ProductScreens from "./screens/ProductScreens";
import CartScreens from "./screens/CartScreens";
import Navbar from "./components/Navbar";
function App() {
  const root = createRoot(document.getElementById("root"));

  return (
    <Router>
      {/*Navbar*/}
      <Navbar></Navbar>
      {/*SideDrawer*/}
      {/*Backdrop*/}
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreens} />
          <Route exact path="/product/:id" component={ProductScreens} />
          <Route exact path="/cart" component={CartScreens} />
        </Switch>
      </main>
      {/*HomeScreen*/}
      {/*ProductScreen*/}
      {/*CartScreen*/}
    </Router>
  );
}

export default App;
