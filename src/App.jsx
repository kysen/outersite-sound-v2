import "./assets/scss/material-kit-react.scss?v=1.8.0";
import React, { useState } from 'react'
import OutersiteSoundPage from "./views/OutersiteSoundPage/OutersiteSoundPage.jsx";
import ZenithPage from "./views/Bands/ZenithPage/ZenithPage.jsx";
import MooseCanoePage from "./views/Bands/MooseCanoePage/MooseCanoePage.jsx";
import Navbar from "./myComponents/Navbar";

function App() {
  const [tab, setTab] = useState('outersite')
  return (
    <>
      <Navbar tab={tab} setTab={setTab} />
      {tab === 'zenith' && <ZenithPage />}
      {tab === 'moose-canoe' && <MooseCanoePage />}
      {tab === 'outersite' && <OutersiteSoundPage />}
    </>
  )
}
export default App