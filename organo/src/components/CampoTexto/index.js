import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholder = "Digite seu " + props.label.toLowerCase()

    const aoDigitado = (evento) =>{
       props.aoAlterado(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required placeholder = {placeholder} />
        </div>
    )
}
export default CampoTexto;