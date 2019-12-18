import React, { useEffect, useGlobal, setGlobal } from 'reactn'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { fetchSponsors } from '../../axios/Axios'

import Home from '../../views/Home/Home'
import Events from '../../views/Events/Events'
import Blog from '../../views/Blog/Blog'
import Contact from '../../views/Contact/Contact'
import Error from '../../views/Error/Error'

import NavBar from "../NavBar/NavBar"
import BottomNav from "../BottomNav/BottomNav"


setGlobal({
  sponsorState: {
    fetchingSponsor: true,
    sponsor: [],
    sponsorError: null,
  },
  articleState: {
    fetchingArticle: true,
    article: [],
    articleError: null,
  },

})


const App = () => {

  const [sponsorState, setSponsorState] = useGlobal('sponsorState')


  useEffect(() => {
    const fetchData = async () => {
      setSponsorState({
        ...sponsorState,
        fetchingSponsor: true
      });
      const sponsors = await fetchSponsors()
      setSponsorState({
        ...sponsorState,
        fetchingSponsor: false,
        sponsor: sponsors
      })
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/schedule" component={Events} />
          <Route path="/articles" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
        <BottomNav />
      </BrowserRouter>
    </div>
  );
}

export default App;
