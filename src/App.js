import PhotosApp from './components/PhotosApp';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Register from './components/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<PhotosApp/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
              <Route path="/home" element={<HomePage/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
