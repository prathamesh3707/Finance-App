import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./components/Welcome.js";
import Chapters from "./components/Chapters.js";
import MainHeader from "./components/MainHeader.js";
import Market from "./components/Market.js";
import Accounts from "./components/Accounts";
import Login from "./components/Login";

function App() {
  return (
    <div>
      {/* <MainHeader /> */}

      {/* login conditional */}
      <Login />

      {/* signup conditional */}

      {/* chapters porting */}

      {/* quiz porting */}

      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/chapters" exact>
          <Chapters />
        </Route>
        <Route path="/market">
          <Market />
        </Route>
        <Route path="/accounts">
          <Accounts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
