import {useEffect, useRef} from "react";

export default function Slider () {

    const slider = useRef()
    useEffect(()=>{
        let counter = 0;
        setInterval(()=>{
            counter = counter + 1;
            slider.current.style.marginLeft = `-${counter}00%`
            slider.current.style.transition = 'all .5s';
            if(counter === 2){
                counter = -1
            }
        },5000)
    })

    return <section className="container mx-auto overflow-hidden h-slider bg-voltic-red-900 mt-5">
        <div className="flex h-full w-full" ref={slider}>
            <div className="bg-blue-800 h-full w-full flex-shrink-0 flex justify-center items-center">
                <h1 className="text-white text-2xl uppercase">Anuncio publicitario 01</h1>
            </div>
            <div className="bg-green-600 h-full w-full flex-shrink-0 flex justify-center items-center">
                <h1 className="text-white text-2xl uppercase">Anuncio publicitario 02</h1>
            </div>
            <div className="bg-purple-800 h-full w-full flex-shrink-0 flex justify-center items-center">
                <h1 className="text-white text-2xl uppercase">Anuncio publicitario 03</h1>
            </div>
        </div>
    </section>
}
