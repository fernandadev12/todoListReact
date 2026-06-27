import "./emptystate-style.css";

export function EmptyState() {
  return (
    <div className="empty-state">
      <h2>Não há tarefas cadastradas</h2>
      <p>Adicione tarefas para começar a organizar seus estudos</p>
    </div>
  );
}
