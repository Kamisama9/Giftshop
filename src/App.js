import Navbar from './Components/Navbar'
import { Routes ,Route} from 'react-router-dom';
import Home from './Components/Home';
import GiftGenerator from './Components/GiftGenerator';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/GiftGenerator' element={<GiftGenerator/>} />
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
