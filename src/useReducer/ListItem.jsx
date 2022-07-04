

export const ListItem = ({ description, id, done, onRemoveTodo, checkToDo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span onDoubleClick={() => checkToDo(id)} className={`align-self-center ${done === true && 'text-decoration-line-through'}`}>{description}</span>
      <button onClick={() => onRemoveTodo(id)} className="btn btn-danger">Borrar</button>
    </li>
  );
};
