import React from "react";

export class NavBar extends React.Component {
    render() {
        return <>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><span class="badge rounded-pill bg-success">arbr</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Send Nutrients</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Invite Trees</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Messages</a>
        </li>        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search Root Network" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Submit</button>
      </form>
    </div>
  </div>
</nav>
            </>
        
    }
}

export default NavBar;