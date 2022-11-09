import './App.css'
import Dialogs from './components/Dialogs';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="app_wrapper">
        <Header/>
        <Navbar/>
        <div className='main'>
       <Routes>
          <Route path='/profile' element={<Main/>}/>  
          <Route path='/messages' element={<Dialogs/>}/>  
            
      </Routes>
        
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
