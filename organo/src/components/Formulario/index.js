import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

import './Formulario.css'

const Formulario = (props) =>{
   
    const Salvar = (evento)=>{
        evento.preventDefault()
        props.onSave({
            nome,apelido,imagem,cargo
        })
        setNome('')
        setApelido('')
        setImagem('')
        setCargo('')
    }

    const [nome, setNome] = useState('')
    const [apelido, setApelido] = useState('')
    const [imagem, setImagem] = useState('')
    const [cargo, setCargo] = useState('')

    return(
        <section className="formulario">
            <form onSubmit={Salvar}>
                <h2> Preencha os dados para criar o card dos participantes do discord</h2>
                <CampoTexto 
                req="true"
                label="Nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)}/>

                <CampoTexto 
                req="true" 
                label="Apelido"
                valor={apelido}
                aoAlterado={valor => setApelido(valor)}/>

                <CampoTexto 
                req="true"
                label="Imagem"
                placeholder="Cole sua imagem aqui"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}/>

                <ListaSuspensa
                req="true"
                label="Cargo"
                valor={cargo}
                itens={props.cargos} //aqui mudamos a lista com map
                aoAlterado = {valor => setCargo(valor)}  />
                <Botao>
                    Criar Card    
                </Botao>
            </form>
        </section>
    )
}

export default Formulario