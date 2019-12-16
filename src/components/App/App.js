import React, { useGlobal, setGlobal } from 'reactn';
import NavBar from "../NavBar/NavBar";
import BottomNav from "../BottomNav/BottomNav";
import Layout from '../Layout/Layout'

setGlobal({
  sponsorState: {
    fetchingSponsor: true,
    sponsor: [],
    sponsorError: null,
  },
});


const App = () => {

  const [sponsorState, setSponsorState] = useGlobal('sponsorState');

  return (
    <div className="App">
      <NavBar />
      <Layout />
      <BottomNav />
    </div>
  );
}

export default App;
