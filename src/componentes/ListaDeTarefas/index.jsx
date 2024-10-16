import axios from "axios";
import { useEffect, useState } from "react";
import Tarefausuario from "../TarefasUsuario";

const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const carregarTarefas = async () => {
      try {
        const tarefasRes = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTarefas(tarefasRes.data);
      } catch (erro) {
        console.error("Erro ao carregar as tarefas", erro);
      }
    };

    const carregarUsuarios = async () => {
      try {
        const usuariosRes = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsuarios(usuariosRes.data);
      } catch (erro) {
        console.error("Erro ao carregar os usuários", erro);
      }
    };

    carregarTarefas();
    carregarUsuarios();
  }, []);

  return (
    <div className="listaDeTarefas" style={{ padding: 20 }}>
      {usuarios.map((usuario) => {
        const tarefasDoUsuario = tarefas.filter(
          (tarefa) => tarefa.userId === usuario.id
        );
        return (
          <Tarefausuario
          tarefasUsuarios={tarefasDoUsuario}
            usuario={usuario}
          />
        );
      })}
    </div>
  );
};

export default ListaDeTarefas;
