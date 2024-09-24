import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import Images from './components/Images'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/images" element={<Images />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
