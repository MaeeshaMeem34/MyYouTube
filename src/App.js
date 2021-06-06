import React , {useState, useEffect} from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import {Container } from 'react-bootstrap'
import './_app.scss'
import './_base.scss';
import { Redirect, Route, Switch, useHistory} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import { useSelector } from 'react-redux'


const LayOut=({children})=>{
  const [sidebar, setSidebar] = useState(false)

const handleToggleSidebar =()=>{
  setSidebar(value => !value)
}
  return(
    <>
   <Header handleToggleSidebar ={handleToggleSidebar }/>

   <div className='app_container '>
     <Sidebar  sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
     <Container fluid className='app_main '>
     {children}

   </Container>
   </div>

   
  </>

  )
}

function App() {

  const {accessToken, loading} = useSelector(state=> state.auth)


  const history = useHistory()
  useEffect(() => {
    if(!loading && !accessToken){
      history.push('/login')

    }
  
  }, [accessToken, loading, history])


  
  
  return (

    
      <Switch> 
      <Route path='/' exact >
        <LayOut>
          <HomeScreen />
        </LayOut>
      </Route>

      <Route path="/login" exact>
        <LoginScreen />
      </Route>


      <Route path="/search" exact >
        <LayOut>
          <p> search </p>
        </LayOut>
      </Route>

      <Route >
       <Redirect to='/'/>
      </Route>



      </Switch>


    
  );
}

export default App;
