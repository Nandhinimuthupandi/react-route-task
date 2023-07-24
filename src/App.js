import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header/Header';
import All from './components/All/All'
import FullStackDevelopment from './components/FullStackDevelopment/FullStackDevelopment';
import DataScience from './components/DataScience/DataScience';
import CyberSecurity from './components/CyberSecurity/CyberSecurity';
import Career from './components/Career/Career';

function App() {
  return (
    
    <div className="App">
     <Header/>
     <Routes>
       <Route path='/' element= {<All/>} />
       <Route path='/FullStackDevelopment' element= {<FullStackDevelopment/>} />
       <Route path='/DataScience' element= {<DataScience/>} />
       <Route path='/CyberSecurity' element= {<CyberSecurity/>} />
       <Route path='/Career' element= {<Career/>} />
     </Routes>
    </div>
    
  );
}

export default App;
