import logo from "../../logo-web.svg"

export default function Header () {

    const title = (ev) => {
        document.title = "Voltic | " + ev.target.innerText
    }

    return <header className="bg-voltic-blue-900 py-2.5 px-2 md:px-0">
        <div className="container mx-auto flex justify-between items-center">
            <figure>
                <img src={logo} alt="" width="150"/>
            </figure>
            <nav className="hidden md:block text-white font-bold">
                <a className="p-4 hover:text-voltic-red-500" onClick={title} href="#nosotros">Nosotros</a>
                <a className="p-4 hover:text-voltic-red-500" onClick={title} href="#servicios">Servicios</a>
                <a className="p-4 hover:text-voltic-red-500" onClick={title} href="#testimonios">Testimonios</a>
                <a className="p-4 hover:text-voltic-red-500" onClick={title} href="#galeria"> Galería </a>
                <a className="p-4 hover:text-voltic-red-500" onClick={title} href="#contacto">Contacto</a>
            </nav>
        </div>
    </header>
}
