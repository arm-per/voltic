export default function Contact (){

    return <>
        <div className="text-white h-full text-center">
        <h2 className="text-white font-bold text-2xl mb-4 text-center">Contáctanos</h2>
            <div className="md:grid grid-cols-3 items-center mb-4">
                <address className="md:border-r-2 md:border-white md:pr-4 md:mr-4 md:mb-0 mb-2">Av. Siempre Viva 742 <br/> Polanco, CDMX</address>
                <p className="md:border-r-2 md:border-white md:pr-4 md:mr-4 h-full md:flex items-center md:mb-0 mb-2">Teléfono 550 000 0000</p>
                <p className="block">contacto@voltic.com</p>
            </div>
            <div className="h-96 box-border">
                <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14528.717930927533!2d-104.12900586128082!3d24.444557482348504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869af0145e49dea7%3A0x4619cc39b8dc7be5!2sCiudad%20Guadalupe%20Victoria%2C%20Durango!5e0!3m2!1sen!2smx!4v1621021170975!5m2!1sen!2smx"  style={{'border': '0'}} loading="lazy" className="w-full h-full"/>
            </div>
        </div>
    </>
}
