import './App.css';
import {useState} from 'react'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import home from './Components/Home/home'
import contactUs from './Components/ContactUs/contactUs'
import profile from './Components/Profile/profile'
import products from './Components/Products/products'

function App(props) {
  const [IsActive, setIsActive] = useState(false)
  function handleClick (){
    setIsActive(!IsActive)
  }
  return (
    <BrowserRouter className="App">
        <div className='nav-container'></div>
      <nav>
          <ul className='navLogo'>
            <li><Link to='/'className='logo'> SCPSC </Link></li>
          </ul>
        <ul className={IsActive?'burger-navLinks': 'navLinks'}>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/profile"> Profile </Link></li>
          <li><Link to="/products"> Products </Link></li>
          <li className='contactUsLink'><Link to="/contactUs"> Contact Us </Link></li>
        </ul>
        <div className='burger-menu' onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <Switch >
        <Route path='/' exact component={home}/>
        <Route path='/contactUs' component={contactUs}/>
        <Route path='/profile' component={profile}/>
        <Route path='/products' component={products}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
