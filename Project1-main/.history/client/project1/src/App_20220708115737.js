import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreens from "./screens/HomeScreens";
import ProductScreens from "./screens/ProductScreens";
import CartScreens from "./screens/CartScreens";
import Navbar from ".components/Navbar";
function App() {
  return (
    <Router>
      <div className="App">
        {/*Navbar*/}
        <Navbar
        {/*SideDrawer*/}
        {/*Backdrop*/}
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreens} />
            <Route exac path="/product/:id" component={ProductScreens} />
            <Route exact path="/cart" component={CartScreens} />
          </Switch>
        </main>
        {/*HomeScreen*/}
        {/*ProductScreen*/}
        {/*CartScreen*/}
      </div>
    </Router>
  );
}

export default App;
