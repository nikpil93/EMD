import React, { useGlobal, setGlobal } from 'reactn';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../../views/Home/Home'
import Schedule from '../../views/Schedule/Schedule';
import Blog from '../../views/Blog/Blog';
import Contact from '../../views/Contact/Contact';
import Error from '../../views/Error/Error';

import NavBar from "../NavBar/NavBar";
import BottomNav from "../BottomNav/BottomNav";
import Layout from '../Layout/Layout';

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

        <BrowserRouter>
        <NavBar/>
          <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/schedule" component={Schedule} />
          <Route path="/articles" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
          </Switch>
          <Layout />
          <BottomNav />
        </BrowserRouter>
    </div>
  );
}

export default App;
