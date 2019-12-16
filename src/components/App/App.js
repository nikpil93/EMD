import React, { useGlobal, setGlobal } from 'reactn';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../../views/Home'
import Schedule from '../../views/Schedule'
import Article from '../../views/Article'
import Contact from '../../views/Contact'
import Error from '../../views/Error'

import NavBar from "../NavBar/NavBar";
import BottomNav from "../BottomNav/BottomNav";
import Layout from '../Layout/Layout'

/*
  setGlobal({
    sponsorState: {
      fetchingSponsor: true,
      sponsor: [],
      sponsorError: null,
    },
  });
*/

const App = () => {

/*  const [sponsorState, setSponsorState] = useGlobal('sponsorState'); */

  return (
    <div className="App">
      <NavBar/>
        <BrowserRouter>
          <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/schedule" component={Schedule} />
          <Route path="/articles" component={Article} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
          </Switch>
        </BrowserRouter>
      <Layout />
      <BottomNav />
    </div>
  );
}

export default App;
