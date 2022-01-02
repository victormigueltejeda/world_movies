import React from "react";
import { MoviesGrid } from "../components/MoviesGrid";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { MoviesDetail } from "../pages/Moviesdetail";
import { LandingPages } from "../pages/LandingPages";

function App(props) {
  return (
    <Router className="App">
      <header>
        <Link to="/">
          <h1 className="title">Movies</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MoviesDetail />
          </Route>
          <Route path="/">
            <LandingPages />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export { App };
