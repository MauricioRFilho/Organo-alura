
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import { useState } from 'react'
import Time from './components/Time';
import Footer from './components/Footer';




function App() {
  const [users, setUsers] = useState([])
  const cargos =[{
    nome:'Anjo',
    pColor:'#DB6EBF',
    sColor:'#FAE9F5'
  },{
    nome:'Adm',
    pColor:'#57C278',
    sColor:'#D9F7E9'
  },{
    nome:'Chitão',
    pColor:'#82CFFA',
    sColor:'#E8F8FF'
  },{
    nome:'Estudantes',
    pColor:'#A6D157',
    sColor:'#F0F8E2'
  },{
    nome:'Bots',
    pColor:'#FF8A29',
    sColor:'#FFEEDF'
  },{
    nome:'Maligno',
    pColor:'#FFBA05',
    sColor:'#FFF5D9'
  },
]


  const newUser = (user) =>{
    console.log(users)
    setUsers([...users, user])
  }
  return (
    <div className="App">
          <Banner/>
          <Formulario cargos={cargos.map(cargo => cargo.nome)} onSave={user => newUser(user)}/>
          
          {cargos.map(cargo => <Time 
          key={cargo.nome} 
          nome={cargo.nome} 
          cargos={users.filter(user => user.cargo === cargo.nome)} 
          pColor={cargo.pColor} 
          sColor={cargo.sColor}/>)}

          <Footer/>
    </div>
  );
}

export default App;
