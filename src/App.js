import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  Favorites  from "./pages/Favorites";
import MealPage  from "./pages/MealPage";
import HomePage from "./pages/HomePage"
import {PageNotFound} from './pages/PageNotFound';

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path='/meals' element={<HomePage/>}/>
          <Route path='/meal/:idMeal' element={<MealPage/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;