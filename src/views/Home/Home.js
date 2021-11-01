import store from "../../store/store";
import {useEffect,useState} from 'react';

function Home(props) {

  useEffect(() => {

  }, []);

  return (
    <div className="row">
      <div className="col s12">
        <table className="responsive-table centered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Telfone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>

            {store.getState().salvarReducer.clientes.map(cl =>(
            <tr>
              <td>{cl.id}</td>
              <td>{cl.nome}</td>
              <td>{cl.telefone}</td>
              <td>{cl.email}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
