import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="product/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
