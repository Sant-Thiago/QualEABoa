import { BrowserRouter, Route, Routes } from "react-router-dom"
// import './App.css';
import Home from './pages/Home';
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

        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
