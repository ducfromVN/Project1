import "./App.css";
import { BrowserRouter as Router, Sưitch, Route } from "react-router-dom";
import HomeScreens from "./screens/HomeScreens";
import HomeScreens from "./screens/HomeScreens";
import HomeScreens from "./screens/HomeScreens";
function App() {
  return (
    <Router>
      <div className="App">
        {/*Navbar*/}
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
