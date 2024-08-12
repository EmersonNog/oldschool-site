import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Join from "../Pages/JoinUs/JoinUs";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              {" "}
              <Home />{" "}
            </>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <>
              {" "}
              <About />{" "}
            </>
          }
        />
        <Route
          exact
          path="/join"
          element={
            <>
              {" "}
              <Join />{" "}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default Rotas;
