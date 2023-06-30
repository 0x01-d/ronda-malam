import React from "react";
import Tabs from "./components/tabs";

import HomePage from "./pages/HomePage";
import LokasiPage from "./pages/LokasiPage";
import SemuaHariPage from "./pages/SemuaHariPage";
import AnggaranPage from "./pages/AnggaranPage";
import AdminPage from "./pages/AdminPage";
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
          <Route exact={true} path="/lokasi" Component={LokasiPage} />
          <Route exact={true} path="/semua-hari" Component={SemuaHariPage} />
          <Route exact={true} path="/anggaran" Component={AnggaranPage} />
          <Route exact={true} path="/admin" Component={AdminPage} />
          <Route path="*" Component={HomePage} />
        </Routes>
      </BrowserRouter>
      <Tabs />
    </>
  );
}
export default App;
