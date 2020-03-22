import React, { useEffect, useGlobal, setGlobal } from 'reactn'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { fetchSponsors } from '../../axios/Axios'

import Home from '../../views/Home/Home'
import Events from '../../views/Events/Events'
import Gallery from '../../views/Gallery/Gallery'
import Contact from '../../views/Contact/Contact'
import Error from '../../views/Error/Error'


import NavBar from "../NavBar/NavBar"
import BottomNav from "../BottomNav/BottomNav"
import SocialBar from "../FixSocial/FixSocial";


setGlobal({
  sponsorState: {
    fetchingSponsor: true,
    sponsor: [],
    sponsorError: null,
  }
})


const App = () => {

  const [sponsorState, setSponsorState] = useGlobal('sponsorState')


  useEffect(() => {
    const fetchData = async () => {
      setSponsorState({
        ...sponsorState,
        fetchingSponsor: true
      })
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
        <SocialBar/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/schedule" component={Events} exact />
          <Route path="/gallery" component={Gallery} exact />
          <Route path="/contact" component={Contact} exact />
          <Route component={Error} />
        </Switch>
        <BottomNav />
      </BrowserRouter>
    </div>
  )
}

export default App
