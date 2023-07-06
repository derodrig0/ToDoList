import { useState } from "react";
import PropTypes from 'prop-types';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category) return;
    // Adicionar Todo
    addTodo(title, category);
    // Limpar os campos
    setTitle("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func
};

export default TodoForm;
