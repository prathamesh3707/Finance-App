import { Route, Switch, Redirect } from "react-router-dom";
import Chapters from "./components/Chapters.js";
import MainHeader from "./components/MainHeader.js";
import Market from "./components/Market.js";
import Accounts from "./components/Accounts";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <MainHeader />

      {/* login conditional */}
      {/* <Login /> */}

      {/* signup conditional */}
      {/* <SignUp /> */}

      <Switch>
        {/* chapters porting */}

        {/* quiz porting */}
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
