import img01 from './gallery/gallery0.jpg';
import img02 from './gallery/gallery1.jpg';
import img03 from './gallery/gallery2.jpg';
import img04 from './gallery/gallery3.jpg';
import img05 from './gallery/gallery4.jpg';
import img06 from './gallery/gallery5.jpg';
import img07 from './gallery/gallery6.jpg';
import img08 from './gallery/gallery7.jpg';
import img09 from './gallery/gallery8.jpg';
import img10 from './gallery/gallery9.jpeg';
import img11 from './gallery/gallery10.jpeg';
import img12 from './gallery/gallery11.jpeg';

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
        img01,
        img02,
        img03,
        img04,
        img05,
        img06,
        img07,
        img08,
        img09,
        img10,
        img11,
        img12
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
                <img src={img01} alt="" className="w-full h-full object-cover object-center" width="100%" height="500px"/>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-2">
                {
                    images.map((image, index) => {
                        return <img src={image}  key={index} onClick={galleryHandleEvent} className="w-full h-32 object-cover" alt="gallery_image" width='100%' height="96px"/>
                    })
                }
            </div>
        </section>
    </>
}
