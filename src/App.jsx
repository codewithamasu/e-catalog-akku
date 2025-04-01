import './style.css'
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Export from './pages/Export';
import FourWheels from './pages/FourWheels';
import Industry from './pages/Industry';
import TruckAndHeavyEquipment from './pages/TruckAndHeavyEquipment';

function App() {

  return (
    <div style={{fontFamily: 'Montserrat, sans-serif'}}>
     <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/products/export' element={<Export/>}/>
        <Route path='/products/four-wheels' element={<FourWheels/>}/>
        <Route path='/products/industry' element={<Industry/>}/>
        <Route path='/products/truck-and-heavy-equipment' element={<TruckAndHeavyEquipment/>}/>
     </Routes>
    </div>
  )
}

export default App
