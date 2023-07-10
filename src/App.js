import Form from './components/Form'
import Nav from './components/Nav';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
    <Nav/>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
