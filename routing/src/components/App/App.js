import { Routes, Route, Link } from 'react-router-dom'
import AboutPage from '../../pages/AboutPage';
import BlogPage from '../../pages/BlogPage';
import HomePage from '../../pages/HomePage';
import Navbar from '../NavBarMenu';
function App() {
  return (
    <>
     
   <Navbar/>
      
    
    <div>
      <Routes>
        <Route path='/home'  element={<HomePage/>}/>
        <Route path='/blog'  element={<BlogPage/>}/>
        <Route path='/about'  element={<AboutPage/>}/>
      </Routes>
     
    </div>
    
    </>
  );
}

export default App;
