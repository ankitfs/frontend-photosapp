import PhotosApp from './components/PhotosApp';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<PhotosApp/>}></Route>
              <Route path="/home" element={<HomePage/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
