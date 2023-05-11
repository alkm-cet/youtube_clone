import './App.css';
//COMPONENTS
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
//ROUTER
import { BrowserRouter as Router } from 'react-router-dom';
//CONTEXT
import VideoContextProvider from './components/context/VideoContext';

function App() {



  return (
    <VideoContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <MainPage />
        </Router >
      </div>
    </VideoContextProvider>
  );
}

export default App;
