import { useState, useEffect } from "react";
import AddDeal from "../components/AddDeal";
import CardContainer from "../components/CardContainer";
import EmptyDeals from "../components/emptyDeals";

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
    const [deals, _setDeals] = useState(start_deals);

    const setDeals = (state)=>{
      _setDeals(state);
      localStorage.setItem('deals', JSON.stringify(state));
    }

    useEffect(() =>{
      const deals = JSON.parse(localStorage.getItem('deals')) ?? [];
      setDeals(deals);
    }, [] )

    const addNewDeals = (descr, importance, day) => {
      setDeals([...deals, 
        {
          id: Date.now(),
          descr, 
          importance, 
          day
        }]);
    };

    const deleteDeal = (id) => {
      setDeals(deals.filter(elem => elem.id !== id));
    }

    const deleteWeekDay = (day_num) => {
      setDeals(deals.filter(elem => elem.day !== day_num));
    }

  return (
    <>
      <AddDeal addNewDeals={addNewDeals}/>
      <CardContainer deleteDeal={deleteDeal} deals={deals} deleteWeekDay={deleteWeekDay}/>
      
      
    </>
  );
}

export default App;
