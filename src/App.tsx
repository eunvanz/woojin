import { Router, Switch, Route } from "react-router-dom";

import browserHistory from "./router/history";

import Header from "./reusable/header";
import Footer from "./reusable/footer";

import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import Products from "./pages/Products";
import Inquiry from "./pages/Inquiry";

browserHistory.listen((location, action) => {
  if (action === "PUSH") {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }
});

function App() {
  return (
    <div className="App">
      <Router history={browserHistory}>
        <Header />
        <Switch>
          <Route path="/inquiry" component={Inquiry} />
          <Route path="/introduce" component={Introduce} />
          <Route path="/products" component={Products} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
