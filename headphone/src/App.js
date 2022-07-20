
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Homepage } from './pages/Homepage';
// import { Loginpage } from './pages/Loginpage';
// import { Products } from './pages/Products';

function App() {
  return (
  <Routes>

    <Route path='/homepage' element={<Homepage/>}/>
    {/* <Route path='/loginpage' element={<Loginpage/>}/>
  <Route path='/products' element={<Products/>}/> */}
  
  </Routes>
 

   
  );
}

export default App;
