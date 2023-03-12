import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreens from "./screens/HomeScreens";
import ProductScreens from "./screens/ProductScreens";
import CartScreens from "./screens/CartScreens";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Router>
        {/*Navbar*/}
        <Navbar></Navbar>
        {/*SideDrawer*/}
        {/*Backdrop*/}
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreens} replace  />
            <Route exact path="/product/:id" component={ProductScreens}  replace />
            <Route exact path="/cart" component={CartScreens} />
          </Switch>
        </main>
        {/*HomeScreen*/}
        {/*ProductScreen*/}
        {/*CartScreen*/}
      </Router>
    </div>
  );
}

export default App;
