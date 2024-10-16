function TarefaCompleta({ tarefa }) {
    return (
      <p style={{textDecoration: "line-through", padding: "5px" }}>
        {tarefa.title}
      </p>
    );
  }
  
  export default TarefaCompleta;
  