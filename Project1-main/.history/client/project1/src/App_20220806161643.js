import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import Auth from "./view/Auth";
import Dashboard from "./view/Dashboard";
import AuthContextProvider from "./view/AuthContext";
import ProtectedRoute from "./routing/ProtectedRoute";
import AddProduct from "./screens/AddProduct";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <AuthContextProvider>
        <Switch>
          <Route
            exact
            path="/admin"
            render={(props) => <Auth {...props} authRoute="admin" />}
          />
          <ProtectedRoute
            exact
            path="/admin/dashboard"
            component={Dashboard}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="admin/addproducts"
            component={<AddProduct}
          ></ProtectedRoute>
        </Switch>
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <main className="app">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />
          </Switch>
        </main>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
