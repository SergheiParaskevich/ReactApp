import { useState } from "react";
import AddDeal from "../components/AddDeal";
import CardContainer from "../components/CardContainer";

const start_deals = [
  {
    id: 1,
    descr: 'meet',
    importance: '0',
    day: '1'
  },
  {
    id: 2,
    descr: 'meet2',
    importance: '1',
    day: '1'
  },
  {
    id: 3,
    descr: 'meet3',
    importance: '3',
    day: '1'
  }
]



function App() {
    const [deals, setDeals] = useState(start_deals);

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
