import logo from "../../logo-web.svg"
import {useEffect} from "react";

export default function Header () {

    const title = (ev) => {
        document.title = "Voltic | " + ev.target.innerText
    }
    useEffect(()=> {
        const menu = document.getElementById('menu'),
            menuButton = document.getElementById('menu-button');

        menuButton.addEventListener('click', ()=>{
            menu.classList.toggle('show')

            if(menu.classList.contains('show')){
                menu.addEventListener('click', ()=>{
                    menu.classList.remove('show');
                })
            }
        })
    })

    return <header className="bg-voltic-blue-900 py-2.5 px-2 md:px-0 sticky top-0 md:static w-screen z-50">
        <div className="container mx-auto flex justify-between items-center ">
            <figure>
                <img src={logo} alt="" width="150" height="40"/>
            </figure>
            <button className="block md:hidden text-white p-3 uppercase font-bold text-xl" id="menu-button">Menu</button>
            <nav className=" w-auto text-center left-0 md:static md:flex text-white font-bold" id="menu">
                <a className="p-4 block hover:text-voltic-red-500" onClick={title} href="#nosotros">Nosotros</a>
                <a className="p-4 block hover:text-voltic-red-500" onClick={title} href="#servicios">Servicios</a>
                <a className="p-4 block hover:text-voltic-red-500" onClick={title} href="#testimonios">Testimonios</a>
                <a className="p-4 block hover:text-voltic-red-500" onClick={title} href="#galeria"> Galería </a>
                <a className="p-4 block hover:text-voltic-red-500" onClick={title} href="#contacto">Contacto</a>
            </nav>
        </div>
    </header>
}
