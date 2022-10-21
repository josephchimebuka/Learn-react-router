import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import  Products from './pages/Products'
import  Error from './pages/Error'
import SharedLayout from './components/SharedLayout'
import SingleProduct from './components/SingleProduct'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import {useState} from 'react'


function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<SharedLayout/>}>
      <Route  index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='login' element={<Login user={user}/>}/>
      <Route path='dashboard' element={<Dashboard setUser={setUser}/>}/>
      <Route path='products/:productId' element={<SingleProduct />}/>
      </Route>
      <Route path='*' element={<Error/>}/> 

    </Routes>
   </BrowserRouter>
  );
}

export default App;
