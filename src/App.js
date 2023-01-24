import './App.css';
import Meals from './Components/Meals'
import SearchMeals from './Components/SearchMeals';
import Favorites from './Components/Favorites';
import Modal from './Components/Modal';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useGlobalContext } from './Context';
function App() {
  const {showModals,favorites}=useGlobalContext();
  return (
    <div className="App">
     <SearchMeals/>
     {favorites.length > 0 && <Favorites/>}
     <Meals/> 
    {showModals && <Modal/>}
    
    </div>
    
  );
}

export default App;
