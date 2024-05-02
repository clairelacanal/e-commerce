import './App.css'
import Homepage from './Components/HOMEPAGE/Home';
import AboutPage from './pages/AboutPage';
import ItemDetails from './pages/ItemDetails';
import NotFoundPage from './pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path='/product-details/:productId' element={<ItemDetails/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
