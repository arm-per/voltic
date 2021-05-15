import Formulario from "./Formulario";
import Contact from "./Contact";

export default function Form (){

    return <section className="container mx-auto md:grid grid-cols-2 bg-voltic-blue-800 gap-8 p-4 mb-8" id="contacto">
        <Contact/>
        <Formulario/>
    </section>
}
