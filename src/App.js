import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Main } from './pages/Main/main';
import { SingleProduct } from './pages/SingleProduct/singleProduct';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/2' element={<SingleProduct/>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
