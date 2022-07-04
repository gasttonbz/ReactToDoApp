

const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initialState, action = {}) => {

    if (action.type === 'Agregar nuevo todo') {
        return [...state, action.payload]
    }


    return state;
};

let todoState = todoReducer();

console.log(todoState);

const newTodo = {
    id: 2,
    todo: 'Comprar Coca',
    done: false,
};

todoState = todoReducer(todoState, {
    type: 'Agregar nuevo todo',
    payload: newTodo,
});

console.log(todoState);
