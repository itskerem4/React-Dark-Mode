import './style/App.css';
import Sun from './img/sun.png';
import Moon from './img/moon.png';
import { useState } from 'react';
function App() {
    const [DarkMode, setDarkMode] = useState(false);
    
  return (
    <div className={DarkMode ? 'dark-mode' : 'light-mode'}>
      <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
  <div class="container-fluid">
    <a class={DarkMode ? 'navbar-brand text-info fw-bold' : 'navbar-brand text-warning fw-bold'} href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ">About</a>
        </li>
      </ul>
    </div>
    <div className='box'>
      <img src={Sun} style={{width:'40px'}}/>
      <label className='switcher'>
        <input type='checkbox' onChange={()=> setDarkMode(!DarkMode)}/>
        <span className='slider round'></span>
        </label>
        <img src={Moon} style={{width:'40px'}}/>
      </div>
  </div>
</nav>
      <div className='container'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-6 mt-5'>
            <div className={DarkMode ? "card bg-dark d-flex justify-content-center align-items-center border-info" : "card d-flex justify-content-center align-items-center border-warning shadow-lg"}>
              <div className='card-img d-flex justify-content-center align-items-center'>
              <img src={DarkMode ? Moon : Sun} style={{width:'100px'}}/>
              </div>
              <h1 className='card-title'>{DarkMode ? "Dark Mode On " : "Dark Mode Off"}</h1>
              <div className='card-body'>
              <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
  );
}

export default App;
