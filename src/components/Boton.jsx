import '../CSS/Boton.css'
export default function Boton({ text, esBotonClick, manejarClick }) {
    return (
        <button className={esBotonClick ? 'boton-click' : 'boton-reiniciar'}
                onClick={manejarClick} >
            {text}
        </button>
    )
}