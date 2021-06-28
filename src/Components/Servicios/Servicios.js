import image01 from './image_01.webp';
import image02 from './image_02.webp';
import image03 from './image_03.webp'
import {useEffect} from "react";

export default function Servicios () {

    useEffect(()=>{
        const element = document.getElementById('servicios');

        window.addEventListener('scroll', () => {
            if(element.getBoundingClientRect().top <= 10){
                document.title = "Voltic | Servicios";
            }
        })
    })

    return <>
        <section className="container mx-auto mt-5 px-2 mb-10 md:px-0" id="servicios">
        <h2 className="text-white text-4xl font-bold text-center mb-2">Nuestros servicios</h2>
        <hr/>
            <div className="block md:grid grid-cols-3 gap-4">
                <div className="bg-voltic-blue-900 p-4 mb-4 md:mb-0 md:relative top-4">
                    <img src={image01} alt="" className="h-72 w-full object-cover mb-3 border-b-8 border-voltic-red-500 box-border" width="100%" height="288"/>
                    <h3 className="text-white text-2xl text-center mb-2">Servicio 1</h3>
                    <p className="text-white highlight-span mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <span>et dolore magna aliqua.</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco <span>laboris nisi ut aliquip</span> ex ea commodo consequat.
                    </p>
                    <a className="block text-white p-4 border-white border-2 md:w-36 text-center hover:bg-white hover:text-voltic-blue-900 hover:font-bold" href="#page">Conocer más</a>
                </div>
                <div className="bg-voltic-blue-900 p-4 mb-4 md:mb-0">
                    <img src={image02} alt="" className="h-72 w-full object-cover mb-3 border-b-8 border-voltic-red-500 box-border" width="100%" height="288"/>
                    <h3 className="text-white text-2xl text-center mb-2">Servicio 2</h3>
                    <p className="text-white highlight-span mb-4">
                        Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt ut labore <span>et dolore magna aliqua.</span> Ut enim ad minim veniam, quis nostrud exercitation <span>ullamco laboris</span> nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a className="block text-white p-4 border-white border-2 md:w-36 text-center hover:bg-white hover:text-voltic-blue-900 hover:font-bold" href="#page">Conocer más</a>
                </div>
                <div className="bg-voltic-blue-900 p-4 mb-4 md:mb-0 md:relative top-4">
                    <img src={image03} alt="" className="h-72 w-full object-cover mb-3 border-b-8 border-voltic-red-500 box-border" width="100%" height="288"/>
                    <h3 className="text-white text-2xl text-center mb-2 ">Servicio 3</h3>
                    <p className="text-white highlight-span mb-4">
                        Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit</span>, sed do eiusmod tempor incididunt ut labore <span>et dolore magna aliqua.</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a className="block text-white p-4 border-white border-2 md:w-36 text-center hover:bg-white hover:text-voltic-blue-900 hover:font-bold" href="#page">Conocer más</a>
                </div>
            </div>
        </section>
    </>
}
