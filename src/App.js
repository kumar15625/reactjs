import './App.css';
import Navbar from './components/Navbar';
import TextFrom  from './components/TextFrom';
function App() {
  return (
    <>  
    <Navbar title="TextUtils"/>
    <div className='container'>
      <TextFrom heading="Enter The Text To Analyze"/>
    </div>
    
   </>
  ); 
}


export default App;

