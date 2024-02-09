import logo from './logo.svg';
import './App.css';
import { Login } from './pages/login';
import { Feed } from './pages/feed';
import { Navabar } from './component/navbar';
import { AllRoutes } from './Routes/allRoutes';

function App() {
  return (
    <div >
      <Navabar></Navabar>
     
     <AllRoutes/>
    </div>
  );
}

export default App;
