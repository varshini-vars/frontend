import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-secondary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <img src="Recipe_Logo.png" alt="Logo" width="100" height="50" class="d-inline-block align-text-top"></img>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Recipe Folio</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Menu</a>
        </li>
        
    
      </ul>
      <ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        </form>
      </ul>
      <ul>
      <a class="link-light bg-info p-2" href="/login">Login </a></ul>
      <ul><a class="link-light bg-info p-2" href="/register"> Register</a></ul>
      
      
      
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar