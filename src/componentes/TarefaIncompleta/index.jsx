function TarefaIncompleta({ tarefa, setTarefasDoUsuario, tarefasDoUsuario }) {
  const completar = () => {
    const tarefasAtualizadas = tarefasDoUsuario.map((ta) =>
      ta.id === tarefa.id ? { ...ta, completed: true } : ta
    );
    setTarefasDoUsuario(tarefasAtualizadas);
  };

  return (
    <>
      {/* Renderiza a tarefa pendente */}
      <p onClick={completar} style={{ padding: "5px", cursor: "pointer" }}>
        {tarefa.title}
      </p>
    </>
  );
}

export default TarefaIncompleta;
