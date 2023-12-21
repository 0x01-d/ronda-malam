import React from "react";
import Tabs from "./components/Tabs";

import HomePage from "./pages/HomePage";
import LokasiPage from "./pages/LokasiPage";
import SemuaHariPage from "./pages/SemuaHariPage";
import SearchPage from "./pages/SearchPage";
import AdminPage from "./pages/AdminPage";
import MisiPage from "./pages/MisiPage";
import Footer from "./components/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
  // useParams,
  // Link,
  // Redirect,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" Component={HomePage} />
          <Route exact={true} path="/misi" Component={MisiPage} />
          <Route exact={true} path="/semua-hari" Component={SemuaHariPage} />
          <Route exact={true} path="/anggaran" Component={SearchPage} />
          <Route exact={true} path="/admin" Component={AdminPage} />
          <Route path="*" Component={HomePage} />
        </Routes>
        <Tabs />
      </BrowserRouter>
    </>
  );
}
export default App;
