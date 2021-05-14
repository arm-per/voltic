import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import Servicios from "./Components/Servicios/Servicios";
import Nosotros from "./Components/Nosotros/Nosotros";
import CorporativePhrase from "./Components/CorporativePhrase/CorporativePhrase";
import Testimonios from "./Components/Testimonios/Testimonios";
import Gallery from "./Components/Gallery/Gallery";
import Form from "./Components/Form/Form";

const App = () => {
    return <>
        <Header/>
        <Slider/>
        <Nosotros/>
        <Servicios/>
        <CorporativePhrase/>
        <Testimonios/>
        <Gallery/>
        <Form/>
    </>
}

export default App;
