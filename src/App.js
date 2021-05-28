import React , {useState} from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import {Container } from 'react-bootstrap'
import './_app.scss'
import './_base.scss';

function App() {

  const [sidebar, setSidebar] = useState(false)

  const handleToggleSidebar =()=>{
    setSidebar(value => !value)
  }
  return (
    <>
     <Header handleToggleSidebar ={handleToggleSidebar }/>

     <div className='app_container border border-info'>
       <Sidebar  sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
       <Container fluid className='app_main border border-warning'>
       <HomeScreen />

     </Container>
     </div>

     
    </>
  );
}

export default App;
