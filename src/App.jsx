import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Dog from './components/Dog'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dog" element={<Dog />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
