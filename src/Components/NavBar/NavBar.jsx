const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" src="" alt=""  href="#">MacKnow</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" href="#">Productos</a>
                    <a className="nav-link" href="#">Contacto</a>
                    <img className="nav-link" src="carrito.png" alt=""  href="#" />
                </div>
                </div>
            </div>
            </nav>
            
        </div>
    )
}

export default NavBar
