import { useState, useEffect } from "react";
import AddDeal from "../components/AddDeal";
import CardContainer from "../components/CardContainer";
import { Context } from "../context";


function App() {
    const [deals, _setDeals] = useState([]);

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
    
    <Context.Provider value={{deleteDeal, deals, deleteWeekDay, addNewDeals}}>
      <AddDeal />
      <CardContainer  deals={deals} />
    </Context.Provider>
    
      
      
    
  );
}

export default App;
