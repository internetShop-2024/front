import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main/main';
import { SingleProduct } from './pages/SingleProduct/singleProduct';
import { Catalog } from './pages/Catalog/catalog';
import { Breadcrumbs } from './components/BreadCrumbs/bread';
import { NavBar } from './components/NavBar/navBar';
import Products from './pages/Products/products';
import { SignInPage } from './pages/Sing-in/sign-in';
import { SignUpPage } from './pages/Sign-up/sign-up';
import { CartPage } from './pages/Cart/cartPage';
import { Profile } from './pages/Profile/profile';
import { About } from './pages/About/about';
import { Contacts } from './pages/Contacts/contacts';
import { Payment } from './pages/Payment/payment';




function App() {



  

  return (
    <div className="App">
      <Router>
        <NavBar/>

        <Breadcrumbs/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/:id' element={<SingleProduct/>}/>

          <Route path='/:keyword/:id' element={<SingleProduct/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/catalog/:keyword' element={<Products/>}/>

          <Route path='/products' element={<Products/>}/>

          <Route path='/sign-in' element={<SignInPage/>}/>
          <Route path='/sign-up' element={<SignUpPage/>}/>
          <Route path='/cart' element ={<CartPage/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/payment' element={<Payment/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
