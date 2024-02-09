import './App.css';
import { Navbar } from '../../my-react-app/src/component/navbar';
import { AllRoutes } from '../../my-react-app/src/Routes/allRoutes';

function App(): JSX.Element {
  return (
    <div>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;

