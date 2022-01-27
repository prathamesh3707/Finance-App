import { Route, Switch } from "react-router-dom";
import Chapters from "./components/Chapters.js";
import MainHeader from "./components/MainHeader.js";
import Market from "./components/Market.js";
import Accounts from "./components/Accounts";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";
import Chapter1 from "./chapters/Chapter1";
import Chapter2 from "./chapters/Chapter2";
import Chapter3 from "./chapters/Chapter3";

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
        <Route path="/chapter1">
          <Chapter1 />
        </Route>
        <Route path="/chapter2">
          <Chapter2 />
        </Route>
        <Route path="/chapter3">
          <Chapter3 />
        </Route>
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
