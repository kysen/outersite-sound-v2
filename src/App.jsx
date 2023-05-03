import "./assets/scss/material-kit-react.scss?v=1.8.0";
import React from 'react'
import OutersiteSoundPage from "./views/OutersiteSoundPage/OutersiteSoundPage.jsx";
import ZenithPage from "./views/Bands/ZenithPage/ZenithPage.jsx";
import MooseCanoePage from "./views/Bands/MooseCanoePage/MooseCanoePage.jsx";

function App() {
  return (
    <>
      <ZenithPage />
      <MooseCanoePage />
      <OutersiteSoundPage />
    </>
  )
}
export default App