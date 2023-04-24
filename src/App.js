import { useState } from 'react';
import './App.css';
//COMPONENTS
import Navbar from './components/Navbar/Navbar';
import Leftbar from './components/Leftbar/Leftbar';
import MainPage from './components/MainPage/MainPage';

function App() {

  const [isSideBarOpen, setIsSideBarOpen] = useState(true)

  const handleSideBar = () => {
    setIsSideBarOpen(prev => !prev)
  }

  return (
    <div className="App">
      <Navbar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} handleSideBar={handleSideBar} />
      <MainPage isSideBarOpen={isSideBarOpen} />
    </div>
  );
}

export default App;
