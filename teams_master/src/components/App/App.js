import Nav from "../Nav";
import { Routes, Route } from 'react-router-dom'
import ConfigurationPages from "../../pages/Configuration";
import TeamsPages from "../../pages/Teams";

function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/configurations" element={ <ConfigurationPages/> }/>
      <Route path="/teams" element={ <TeamsPages/> }/> 
    </Routes>
     
    </>
  );
}

export default App;
