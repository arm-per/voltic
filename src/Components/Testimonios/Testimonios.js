import TestimonioCard from "./TestimonioCard";
import image from './testimonio_img.webp';
import {useEffect} from "react";

export default function Testimonios () {

    useEffect(()=>{
        const element = document.getElementById('testimonios');

        window.addEventListener('scroll', () => {
            if(element.getBoundingClientRect().top <= 10){
                document.title = "Voltic | Testimonios";
            }
        })
    })

    return <section className="container mx-auto pt-12 pb-12" id="testimonios">
            <h2 className="mb-2 text-white text-4xl font-bold text-center ">Conoce la experiencia de nuestros clientes</h2>
            <hr className="mb-4 "/>
            <div className="md:grid md:grid-cols-2 xl:grid-cols-4 gap-4 ">
                <TestimonioCard author="Juan Pérez">
                    <img src={image} alt=""/>
                    <p>Ultrices in iaculis nunc sed augue. Scelerisque purus semper eget duis at. Senectus et netus et malesuada fames ac turpis egestas. Nisi est sit amet facilisis.</p>
                </TestimonioCard>
                <TestimonioCard author="Luis Díaz">
                    <img src={image} alt=""/>
                    <p>Ultrices in iaculis nunc sed augue. Scelerisque purus semper eget duis at. Senectus et netus et malesuada fames ac turpis egestas. Nisi est sit amet facilisis.</p>
                </TestimonioCard>
                <TestimonioCard author="Facundo Cabral">
                    <img src={image} alt=""/>
                    <p>Ultrices in iaculis nunc sed augue. Scelerisque purus semper eget duis at. Senectus et netus et malesuada fames ac turpis egestas. Nisi est sit amet facilisis.</p>
                </TestimonioCard>
                <TestimonioCard author="Manuel Esparza">
                    <img src={image} alt=""/>
                    <p>Ultrices in iaculis nunc sed augue. Scelerisque purus semper eget duis at. Senectus et netus et malesuada fames ac turpis egestas. Nisi est sit amet facilisis.</p>
                </TestimonioCard>
            </div>
        </section>
}
