import "./App.css";
import { BrowserRouter as Router, Sưitch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/*Navbar*/}
      {/*SideDrawer*/}
      {/*Backdrop*/}
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exac path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
      {/*HomeScreen*/}
      {/*ProductScreen*/}
      {/*CartScreen*/}
    </div>
  );
}

export default App;
