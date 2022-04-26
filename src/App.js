import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home"
import Character from "./components/Character"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/character/:id' element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
