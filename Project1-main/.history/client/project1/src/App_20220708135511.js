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
            <Route  path="/" component={HomeScreens} replace />
            <Route
              
              path="/product/:id"
              component={ProductScreens}
              
            />
            <Route  path="/cart" component={CartScreens} replace />
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
