
import './App.css';
import RegistryForm from './components/RegistryForm';

import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import EditMember from './components/EditMember';
import NavBar from './components/NavBar';


function App() {
  return (
    <div >
      <header>
        <Router>
          <NavBar  />
        <Routes className='container'>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/addMember' element={<RegistryForm />} />
          <Route exact path='/EditMember/:id' element={<EditMember />} />
        </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
