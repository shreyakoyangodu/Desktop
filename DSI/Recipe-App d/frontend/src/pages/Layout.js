import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return ( 
        <>
        
        <nav class="navbar navbar-expand-lg bg-body-primary" style={{backgroundColor:"#FFA500"}}>
  <div class="container-fluid">
  <img src="https://www.zarla.com/images/zarla-our-kitchen-1x1-2400x2400-20211105-h3rkb8t4qvc74kx6bjpt.png?crop=1:1,smart&width=250&dpr=2" width="150" height="150" alt="Logo" className="logo" />
    <a class="navbar-brand" href="#"></a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/view">Recipes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/AboutUs">About Us</a>
        </li>
      </ul>
      
      <Link to="/login">
        <button style={{ backgroundColor: "#FFA500" }}>Logout</button>
      </Link>
    </div>
  </div>
</nav>
  
        <Outlet />
      </>
     );
}
 
export default Layout;