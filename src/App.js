import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/app.css";

const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <Router className="App">
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
