import React, {Suspense} from "react";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import Servicios from "./Components/Servicios/Servicios";
import Nosotros from "./Components/Nosotros/Nosotros";
import CorporativePhrase from "./Components/CorporativePhrase/CorporativePhrase";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";
const Testimonios = React.lazy(()=>import("./Components/Testimonios/Testimonios"));
const Gallery = React.lazy(()=> import("./Components/Gallery/Gallery"));


const App = () => {
    return <>
        <Header/>
        <Slider/>
        <Nosotros/>
        <Servicios/>
        <CorporativePhrase/>
        <Suspense fallback={<div className="text-white text-xl text-center">Cargando...</div>}>
            <Testimonios/>
            <Gallery/>
        </Suspense>
        <Form/>
        <Footer/>
    </>
}

export default App;
