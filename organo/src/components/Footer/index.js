import './Footer.css'

const Footer = () =>{
    return(
        <footer id='footer'>
            <div className='redes'>
               <a href='facebook.com'><img src='/imgs/fb.png' alt='facebook'/></a>
               <a href='instagram.com'> <img src='/imgs/ig.png' alt='instagram'/></a>
               <a href='twitter.com'> <img src='/imgs/tw.png' alt='twitter'/></a>
            </div>
            <div className='logo-footer'>
               <a href='twitter.com'> <img src='/imgs/logo.png' alt='twitter'/></a>
            </div>
            <div className='credits'>
                <span> Desenvolvido no curso <a href='https://cursos.alura.com.br/course/react-desenvolvendo-javascript'>Alura</a>.</span>
            </div>
        </footer>
    )
}
export default Footer