import { Switch, Redirect, Route } from "react-router-dom";
import BurgerBuilder from "./components/BurgerBuilder/BurgerBuilder";
import BootstrapNavbar from "./components/ReactBootsrap/BootstrapNavbar";
export default function App() {
  return (
    <>
      <div>
        <BootstrapNavbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/burger-builder" />
            </Route>
            <Route path="/burger-builder">
              <BurgerBuilder />
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
}
