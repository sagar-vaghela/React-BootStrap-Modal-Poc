import { Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Navigationbar from './components/Navigationbar/Navigationbar';
import Page1 from "./components/Pages/Page1";
import Page2 from "./components/Pages/Page2";
import Page3 from "./components/Pages/Page3";
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Container>
        <Routes>
          <Route path='' element={<Page1 />} />
          <Route path='page2' element={<Page2 />} />
          <Route path='page3' element={<Page3 />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
