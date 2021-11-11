function Mosquito() {

    const mosquitos = [...Array(20)]
    
    return (
        <div>
            {mosquitos.map((i, index) => {return <div key={index} className="mosquito-img" style={{left:`${Math.floor(Math.random()*(window.innerWidth))}px`, top:`${Math.floor(Math.random()*(window.innerHeight)+200)}px`, position:'relative'}}></div>})}
        </div>
    )
}

export default Mosquito
