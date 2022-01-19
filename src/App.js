import { Route, Switch } from "react-router-dom";
import Chapters from "./components/Chapters.js";
import MainHeader from "./components/MainHeader.js";
import Market from "./components/Market.js";
import Accounts from "./components/Accounts";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";

function App() {
  const [loginState, setLogin] = useState(true);
  const [signUpState, setSignUp] = useState(false);
  return (
    <div>
      {!loginState && !signUpState && <MainHeader />}

      {/* login conditional */}
      {loginState && <Login signUp={setSignUp} login={setLogin} />}

      {/* signup conditional */}
      {signUpState && <SignUp signUp={setSignUp} />}

      <Switch>
        {/* chapters porting */}

        {/* quiz porting */}

        <Route path="/chapters" exact>
          <Chapters />
        </Route>
        <Route path="/chapters/c1" exact>
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
