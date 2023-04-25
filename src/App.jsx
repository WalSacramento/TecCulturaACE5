import  './App.scss'
import  'bootstrap/dist/css/bootstrap.min.css' ;

import { Initial } from './pages/initial/Initial';
import { Arts } from './pages/arts/Arts';
import { ArtItem } from './pages/artItem/ArtItem';


import {
  BrowserRouter as Router,
  Route,
  Routes

} from 'react-router-dom'


function App() {

  return (
    <Router>
      
        <Routes>
          <Route exact path='/' element={<Initial />}/>
          <Route exact path='/arts' element={<Arts/>}/>
          <Route exact path='/artItem/:id' element={<ArtItem/>}/>
        </Routes>
    </Router>


  )
}

export default App
