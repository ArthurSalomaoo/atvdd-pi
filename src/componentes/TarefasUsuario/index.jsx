import TarefaCompleta from "../TarefaCompleta";
import TarefaIncompleta from "../TarefaIncompleta";
import { useState } from "react";

const Tarefausuario = ({ tarefasUsuarios, usuario }) => {
  const [tarefasDoUsuario, setTarefasDoUsuario] = useState(tarefasUsuarios);

  return (
    <div style={{ marginBottom: 30, border: "1px solid #ddd", padding: 10 }}>
      <h2>{usuario.name}</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: 1, marginRight: 20 }}>
          <h3>Tarefas Completas</h3>
          <div
            className="tarefaCompleta"
            style={{ backgroundColor: "#69af7a", padding: 10 }}
          >
            {tarefasDoUsuario
              .filter((tarefa) => tarefa.completed)
              .map((tarefa) => (
                <TarefaCompleta key={tarefa.id} tarefa={tarefa} />
              ))}
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h3>Tarefas Pendentes</h3>
          <div
            className="tarefaIncompleta"
            style={{ backgroundColor: "#a1111d", padding: 10 }}
          >
            {tarefasDoUsuario
              .filter((tarefa) => !tarefa.completed)
              .map((tarefa) => (
                <TarefaIncompleta
                  key={tarefa.id}
                  tarefa={tarefa}
                  setTarefasDoUsuario={setTarefasDoUsuario}
                  tarefasDoUsuario={tarefasDoUsuario}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarefausuario;
