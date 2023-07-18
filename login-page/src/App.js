
import './App.css';
import SigninComponent from './Components/SigninComponent';
import SignupComponent from './Components/SignupComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './Components/NavbarComponent';

const App = () =>{
  return(
<BrowserRouter>
<NavbarComponent/>
<Routes>
<Route path='/signin' element = {<SigninComponent/>}></Route>
<Route path='/signup' element = {<SignupComponent/>}></Route>
</Routes>
</BrowserRouter>

  )
}

export default App;
