
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import { useState } from 'react'
import Time from './components/Time';



function App() {
  const [users, setUsers] = useState([])

  const newUser = (user) =>{
    console.log(users)
    setUsers([...users, user])
  }
  return (
    <div className="App">
      <header className="App-header">
          <Banner/>
          <Formulario onSave={user => newUser(user)}/>
          <Time nome="Anjo"/>
          <Time nome="Adm"/>
          <Time nome="Chitão"/>
          <Time nome="Estudantes"/>
          <Time nome="Bots"/>
      </header>
    </div>
  );
}

export default App;
