import './App.css';
import store from './store/store';
import {useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import Home from './views/Home/Home' 



function App() {
  const dispatch = useDispatch();
  var [nome,setNome] = useState("");
  var [telefone,setTelefone] = useState("");
  var [email,setEmail] = useState("");
  var [clientes,setClientes] = useState({
    id:null,
    nome,
    telefone,
    email
  });

  useEffect(()=>{ 

    
    
  },[]);
  
  function salvar(){
    var dados = {
      id:Math.random(),
      nome:nome,
      telefone:telefone,
      email:email
    }
    setClientes(dados);
    dispatch({
      type:'SALVAR',
      clientes

    });
  
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="row">
          <p className="center">Formulário de Cadastro!</p>    
        <div className="col s12 l6 push-l3">
          <form onSubmit={(e) => e.preventDefault()}>

            <div className="input-field col s12">
              <input type="text" name="nome" onChange={(e) => setNome(e.target.value)}/>
              <label htmlFor="nome">Nome</label>
            </div>

            <div className="input-field col s12">
              <input type="tel" name="" onChange={(e) => setTelefone(e.target.value)}/>
              <label htmlFor="telefone">Telefone</label>
            </div>

            <div className="input-field col s12">
              <input type="email" onChange={(e) => setEmail(e.target.value)}/>
              <label htmlFor="email">Email</label>
            </div>

            <div className="col s12">
              <button type="submit" className="btn right" onClick={salvar}>salvar<i className="material-icons right">send</i></button>
            </div>
          </form>
          <Home clientes={clientes} />
        </div>
      </div>
    </div>
  );
}

export default App;
