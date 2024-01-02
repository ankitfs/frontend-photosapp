import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import './App.css'; 

function App() {
  return (
    <div className='application-main-page'>
      <Header/>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
              <Route path="/home" element={<HomePage/>}></Route>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>

  );
}

export default App;
