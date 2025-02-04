
import { TablaBanco } from './components/visualizarTabla'
import { Formulario } from './components/formulario_inversion'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to={'/'}>VISUALIZAR TABLA DE INVERSIONES</Link>
        </li>
        <li>
          <Link to={'/crear'}>INGRESAR UNA INVERSION</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<TablaBanco />}/>
      <Route path='/crear' element={<Formulario />}/>
    </Routes>
      </>
  )
}

export default App
