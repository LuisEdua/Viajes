import '../../assets/styles/Header.css';
function Header() {
    return (
        <header className="header">
            <h1>SofTravel</h1>
            <nav className="Navegator">
                <div className="Buscador">
                    <div className="Busqueda">
                        <input id="busqueda_input" type="search" />
                        <img id="busqueda_img" src="../../../img/PNG's/busqueda .png" alt="busqueda"/>
                    </div>
                </div>
                <div className="usuario">
                    <a><img id="usuario_img" src="../../../img/PNG's/Usuario.png" /></a>
                </div>
            </nav>
        </header>
    )
}
export default Header;