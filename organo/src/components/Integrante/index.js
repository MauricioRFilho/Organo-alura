import './Integrante.css'

const Integrante = ({nome, funcao, imagem, backColor}) =>{ //aqui colocamos o que é necessário para o funcionamento, dessa forma fica mais fácil reutilizar.
    return(
        <div className='integrante'>
            <div className='cabecalho' style={{ backgroundColor: backColor }}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{funcao}</h5>
            </div>
        </div>
    )
}
export default Integrante