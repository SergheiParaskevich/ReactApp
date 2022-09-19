import { useState } from "react";
import AddDeal from "../components/AddDeal";
import CardContainer from "../components/CardContainer";


function App() {
    const [deals, setDeals] = useState([]);

    const addNewDeals = (descr, importance, day) => {
      setDeals([...deals, 
        {
          id: Date.now(),
          descr, 
          importance, 
          day
        }]);
        
      }

  return (
    <>
      <AddDeal addNewDeals={addNewDeals}/>
      <CardContainer deals={deals}/>
    </>
  );
}

export default App;
