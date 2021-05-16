import img_1 from './img_01.webp';
import img_2 from './img_02.webp';
import img_3 from './img_03.webp';
import img_4 from './img_04.webp';
import {useRef,useEffect} from "react";

export default function Gallery () {

    useEffect(()=>{
        const element = document.getElementById('galeria');

        window.addEventListener('scroll', () => {
            if(element.getBoundingClientRect().top <= 10){
                document.title = "Voltic | Galería";
            }
        })
    })


    const renderPlace = useRef()

    const images = [
        img_1,
        img_2,
        img_3,
        img_4,
        img_1,
        img_2,
        img_3,
        img_4
    ]

    const galleryHandleEvent = (ev) => {
        renderPlace.current.children[0].style.filter = 'blur(20px)';
        renderPlace.current.children[0].style.transform = 'scale(1.5)';
        renderPlace.current.children[0].style.transition = 'all .3s';
       setTimeout(()=> {
           renderPlace.current.children[0].src = ev.target.src;
           renderPlace.current.children[0].style.filter = 'blur(0)';
           renderPlace.current.children[0].style.transform = 'scale(1)';
       },300)
    }

    return <>
        <section className="container mx-auto mb-10 bg-voltic-red-700 p-4" id="galeria">
            <h2 className="text-white text-4xl font-bold text-center mb-8">Galería</h2>
            <div ref={renderPlace} className="w-full h-slider overflow-hidden">
                <img src={img_1} alt="" className="w-full h-full object-cover object-center"/>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2 mt-2">
                {
                    images.map((image, index) => {
                        return <img src={image}  key={index} onClick={galleryHandleEvent} className="w-full h-full object-cover max-h-24" alt="gallery_image"/>
                    })
                }
            </div>
        </section>
    </>
}
