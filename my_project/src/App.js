import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Atm from './components/Atm';
import Bill from './components/Bill';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/atm' element={<Atm/>}/>
          <Route path='/bill' element={<Bill/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
