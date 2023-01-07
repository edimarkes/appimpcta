import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Frases1 from './pages/Frases1';
import Frases2 from './pages/Frases2';
import Retornos from './pages/Retornos';
import Contatos from './pages/Contatos';
import Busca from './components/Busca'
import Editar from './pages/Editar'
import UpdateCliente from './pages/UpdateCliente';



function App() {
  return (
    <div>
      <Router>
        <NavBar />
    
     <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/frases1' element={<Frases1 />}></Route>
        <Route path='/frases2' element={<Frases2 />}></Route>
        <Route path='/retornos' element={<Retornos />}></Route>
        <Route path='/contatos' element={<Contatos />}></Route>
        <Route path='/busca' element={<Busca />}></Route>
        <Route path='/editar/:id' element={<Editar />}></Route>
        <Route path='/updateuser/:id' element={<UpdateCliente />}></Route>
        
      
       
        
       </Routes>      
               
      </Router>

     
    </div>
  );
}

export default App;
