import React from "react";
import Tabs from "./components/tabs";

import HomePage from "./pages/HomePage";
import RadioPage from "./pages/RadioPage";
import LibraryPage from "./pages/LibraryPage";
import SearchPage from "./pages/SearchPage";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
  // Redirect,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" Component={HomePage} />
          <Route exact={true} path="/radio" Component={RadioPage} />
          <Route exact={true} path="/library" Component={LibraryPage} />
          <Route exact={true} path="/search" Component={SearchPage} />
          <Route path="*" Component={HomePage} />
        </Routes>
      </BrowserRouter>
      <Tabs />
    </>
  );
}
export default App;
