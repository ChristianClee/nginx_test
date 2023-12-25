import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import {Routes,Route} from 'react-router-dom'
import Counter_1 from './components/counter_1/Counter_1';
import Counter_2 from './components/counret_2/Counter_2';
import Layout from './pages/layout/Layout';


function App() {



  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Counter_1/>} />
        <Route path={'counter_2'} element={<Counter_2/>}/>
      </Route>
    </Routes>
  );
}

export default App;
