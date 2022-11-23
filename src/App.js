import LoginFunction from './Components/Pages/LoginFunction/LoginFunction';
import Homepage from './Components/Pages/HomePage/Homepage';
import RegisterFunction from './Components/Pages/RegisterFunction/RegisterFunction';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContext';

function App() {
  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<LoginFunction />}/>
          <Route path='/Register' element={<RegisterFunction />}/>
          <Route path='/Homepage' element={<Homepage />}/>
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
