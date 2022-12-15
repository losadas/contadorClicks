import '../CSS/Contador.css'
export default function Contador({ numclicks }){
    return (
        <div className='contador' >
            {numclicks}
        </div>
    )
}