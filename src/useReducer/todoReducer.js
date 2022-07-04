
export const todoReducer = (state = [], action) => {

    switch(action.type) {
        case 'Add todo': 
            return [...state, action.payload];

        case 'Remove todo':
            return state.filter(todo => todo.id !== action.payload);

        case 'Check todo':
            return state.map(todo => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
                return todo;
            })

        default: 
            return state;
    }

};