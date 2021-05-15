export default function Formulario (){

    return <form className="bg-voltic-blue-900 p-8">
        <label htmlFor="name" className="text-white block font-bold uppercase text-sm mb-1 text-center">Nombre</label>
        <input type="text" id="name" className="mb-2.5 block w-full box-border p-2"/>
        <label htmlFor="phone" className="text-white block font-bold uppercase text-sm mb-1 text-center">Teléfono</label>
        <input type="phone" id="phone" className="mb-2.5 block w-full box-border p-2"/>
        <label htmlFor="email" className="text-white block font-bold uppercase text-sm mb-1 text-center">Correo electrónico</label>
        <input type="email" id="email" className="mb-2.5 block w-full box-border p-2"/>
        <label htmlFor="project" className="text-white block font-bold uppercase text-sm mb-1 text-center">Cuéntanos sobre tu proyecto</label>
        <textarea name="project" id="project" className="mb-2.5 block w-full box-border p-2 h-36"> </textarea>
        <input type="submit" value="enviar" className="block  w-full p-2 bg-voltic-red-400 uppercase font-bold"/>
    </form>
}
