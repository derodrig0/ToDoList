const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todos</option>
            <option value="Completed">Completos</option>
            <option value="incompleteed">Incompletos</option>
          </select>
        </div>
        <div>
          <p>Ordem Alfabética:</p>
          <button onClick={() => setSort("Asc")}>Asc ▼</button>
          <button onClick={() => setSort("Desc")}>Desc ▲</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
