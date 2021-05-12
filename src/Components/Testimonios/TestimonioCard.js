import star from './star.svg'

export default function TestimonioCard (props) {


    return <div className="bg-voltic-blue-700 p-4 mb-8 md:mb-0 mx-2 md:mx-0">
        <figure>
            <img src={props.children[0].props.src} alt="" className="rounded-full w-40 h-40 object-cover border-4 border-voltic-red-500 mx-auto mb-4"/>
        </figure>
        <div className="flex justify-center mb-4">
            <img src={star} alt="" className="w-8 mr-2"/>
            <img src={star} alt="" className="w-8 mr-2"/>
            <img src={star} alt="" className="w-8 mr-2"/>
            <img src={star} alt="" className="w-8 mr-2"/>
            <img src={star} alt="" className="w-8"/>
        </div>
        <p className="text-center text-white">
            {props.children[1].props.children}
        </p>
        <em className="text-right block mt-4 text-white font-bold">
            - {props.author}
        </em>


    </div>
}
