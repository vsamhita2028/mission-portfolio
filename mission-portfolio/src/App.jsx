import { useState, useEffect } from 'react'
import Header from './components/Header';
import Body from './components/Body';
import Loader from './components/Loader';
import "./App.css";
function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen transition-colors">
      <div
        className={`fixed inset-0 flex items-center justify-center transition-opacity duration-700 ${
          showLoader ? 'opacity-100 z-50' : 'opacity-0 pointer-events-none z-0'
        }`}
      >
        <Loader showLoader={showLoader} />
      </div>
      <div className={`relative z-20 transition-opacity duration-700 ${showLoader ? 'opacity-0' : 'opacity-100'}`}> 
        
        <Body />
      </div>
    </div>
  )
}

export default App
