import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import HomePage from './components/pages/HoemPage/HomePage';
import Catalog from './components/pages/catalog/Catalog';
import BasketPage from './components/pages/BasketPage/BasketPage';
import Promotion from './components/pages/Promotion/Promotion'
import Delivery from './components/pages/Delivery/Delivery'
import ForBuyers from './components/pages/ForBuyers/ForBuyers'
import Stores from './components/pages/Stores/Stores'
import Vacancies from './components/pages/Vacancies/Vacancies'


function App() {
  return (
    <div className='container'>
      <div className='containerMini'>
        <Header />
        <Routes >
          <Route path='/' element={<HomePage />}/>
          <Route path='/catalog' element={<Catalog />}/>
          <Route path='/card' element={<BasketPage />}/>
          <Route path='/promotion' element={<Promotion />}/>
          <Route path='/delivery' element={<Delivery />}/>
          <Route path='/forbuyers' element={<ForBuyers />}/>
          <Route path='/stores' element={<Stores />}/>
          <Route path='/vacancies' element={<Vacancies />}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;
