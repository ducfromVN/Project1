import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
          <Routes>
          <Route path='/welcome' element={<Home/>} />
            <Route  path="/" element={<HomeScreens>} />
            <Route  path="/product/:id" element={ProductScreens} />
            <Route  path="/cart" element={CartScreens} />
          </Routes>
        </main>
        {/*HomeScreen*/}
        {/*ProductScreen*/}
        {/*CartScreen*/}
      </Router>
    </div>
  );
}

export default App;
