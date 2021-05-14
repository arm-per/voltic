import {useEffect} from "react";

export default function Nosotros (){

    useEffect(()=>{
        const element = document.getElementById('nosotros');

        window.addEventListener('scroll', () => {
            if(element.getBoundingClientRect().top <= 10){
                document.title = "Voltic | Nosotros";
            }
        })
    })

    return <main className="container mx-auto h-bout-us nosotros mt-10" id="nosotros">
        <div className="nosotros-mask p-4 flex justify-center items-center flex-col">
            <h2 className="text-white text-4xl font-bold text-center mb-4">¿Quiénes somos?</h2>
            <p className="px-2 md:px-0 highlight-span text-white max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <span>sed do eiusmod tempor</span> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <span>quis nostrud exercitation</span> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in <span>reprehenderit in voluptate velit</span> esse cillum dolore eu fugiat nulla pariatur.
            </p>
        </div>
    </main>
}
