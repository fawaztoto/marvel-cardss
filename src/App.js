
import { Main } from './components/Main'
import './components/Main.css'
import {Routes, Route} from 'react-router-dom'
import { Marvel } from './components/Marvel';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/:id' element={<Marvel/>} />
     </Routes>
    </div>
  );
}

export default App;
