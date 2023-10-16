import './App.css';
import List from './components/list';
import {BrowserRouter,Routes,Switch,Route,Link} from "react-router-dom";


import MyForm from '../src/components/MyForm'

import Edit from './components/Edit';


function App() {
  return (
    <>
    
    <BrowserRouter>
   
      <Routes>
        <Route path='/' index element={<List />}></Route>
        <Route path='/edit/:paramID' element={<Edit/>}></Route>
        <Route path='/form' element={<MyForm/>}></Route>
    
      </Routes>

    </BrowserRouter>

    </>
  );
}

export default App;
