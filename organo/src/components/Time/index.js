import './Time.css'
import Integrante from '../Integrante' 


const Time = (props) =>{
    const backGround = { backgroundColor: props.sColor }
    const border = { borderColor: props.pColor }
    return(
        props.cargos.length > 0 &&
        <section className="time" style={backGround}>
            <h3 style={border}>{props.nome}</h3>
            <div className="integrantes">
            {props.cargos.map(cargo => <Integrante 
            nome={cargo.nome} 
            backColor={props.pColor}
            key={cargo.nome}
            funcao={cargo.cargo} 
            imagem={cargo.imagem} />)}
            </div>
        </section>
    )
}

export default Time 
