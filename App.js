import React from "react";
import { Route } from "react-router-dom";
import Menu from "./components/Menu"; // ./components/
import RedPage from "./pages/RedPage"; // ./pages/
import BluePage from "./pages/BluePage"; // ./pages/
import UsersPage from "./pages/UsersPage";

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
      <Route path="/users" component={UsersPage} />
    </div>
  );
};

export default App;
