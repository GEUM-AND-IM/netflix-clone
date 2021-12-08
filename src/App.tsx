import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as Page from "../src/Page";
import Header from "./Components/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={["/tv", "/tvpros/:tvproId"]} component={Page.TvPage} />
        <Route path="/search" component={Page.SearchPage} />
        <Route path={["/", "/movies/:movieId"]} component={Page.HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
