import logo from '../../logo-web.svg';

export default function Footer(){

    return <footer className="bg-voltic-blue-900 p-6">
            <div className="container mx-auto md:grid grid-cols-4 text-center md:text-left">
                <div className="text-white justify-self-center">
                    <h3 className="font-bold text-white text-lg">Nuestras redes</h3>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="py-1 hover:text-voltic-red-500 block">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="py-1 hover:text-voltic-red-500 block">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="py-1 hover:text-voltic-red-500 block">Instagram</a>
                </div>
                <div className="text-white justify-self-center">
                    <h3 className="font-bold text-white text-lg">Mapa del sitio</h3>
                    <a className="py-1 hover:text-voltic-red-500 block" href="#nosotros">Nosotros</a>
                    <a className="py-1 hover:text-voltic-red-500 block" href="#servicios">Servicios</a>
                    <a className="py-1 hover:text-voltic-red-500 block" href="#testimonios">Testimonios</a>
                    <a className="py-1 hover:text-voltic-red-500 block" href="#galeria"> Galería </a>
                    <a className="py-1 hover:text-voltic-red-500 block" href="#contacto">Contacto</a>
                </div>
                <div className="text-white justify-self-center">
                    <h3 className="font-bold text-white text-lg">Links de interés</h3>
                    <a className="py-1 hover:text-voltic-red-500 block" href="#nosotros">Link 1</a>
                    <a className="py-1 hover:text-voltic-red-500 block" href="#servicios">Link 2</a>
                </div>
                <div className="text-white flex justify-center md:block md:justify-self-end">
                    <a className="py-1 hover:text-voltic-red-500 block w-44" href="#nosotros"><img src={logo} alt="logotipo voltic" width="176" height="46"/></a>

                </div>
            </div>
    </footer>
}
