import { useState } from "react";

export const AddTodo = ({onNewTodo}) => {



    const onInputChange = (e) => {
       // setNewTodo(e.target.value)
        setNuevoTodo({
          description: e.target.value,
          id: new Date().getTime(),
          done: false
        })
    }

    const onNewSubmit = (e) => {
        e.preventDefault();
        if(nuevoTodo.description === '') return;
        onNewTodo(nuevoTodo);
        setNuevoTodo({
          description: '',
          id: null,
          done: false,
        });
    };

    //const [newTodo, setNewTodo] = useState('');

    const [nuevoTodo, setNuevoTodo] = useState({
      description: '',
      id: null,
      done: false,
    })


  return (
    <form onSubmit={onNewSubmit}>
      <input onChange={onInputChange} value={nuevoTodo.description} type="text" className="form-control" />
      <input type="submit" value="Enviar" className="btn btn-primary mt-2" />
    </form>
  );
};
