import { BrowserRouter, Route, Routes } from "react-router-dom"
// import './App.css';
import Home from './pages/Home';
import Place from './pages/Place';
import { StrictMode } from "react";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          
          <Route
            path='/'
            element={<Home />}
          />

          <Route 
            path='/place'
            element={<Place />}
          />

        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
