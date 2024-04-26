import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
         <div className={darkMode ? "dark" : ""}>
            <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
            {/* Other components and content */}
        </div>
    </>
  )
}

export default App
