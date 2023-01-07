
import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Message from './component/Message';
import Extramessage from './component/Extramessage';
import Services from './component/Services';
import Download from './component/Download';
import Contact from './component/Contact';
import Links from './component/Links';
import Copyrights from './component/Copyrights';
 

function App() {
  return (
    <>
       <Navbar/>
       <Header/>
       <Message/> 
       <Extramessage/>
       <Services/>
       <Download/>
       <Contact/>
       <Links/>
       <Copyrights/>
   </>
  );
}

export default App;
