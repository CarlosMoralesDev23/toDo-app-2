// Aca tendremos la caja de los todo
// tambien todas las funciones que aplican a los todo y los filtros. 

import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Pedra del alma'),
        new Todo('Pedra del poder'),
        new Todo('Pedra del tiempo'),
        new Todo('Pedra del espacio'),
        new Todo('Pedra del infinito'),
    ],

    filter : Filters.All,
}

const initStore = ()=>{
    console.log(state)
    console.log('InitStore 🍉')
}

const loadStore = ()=>{
    throw new Error('Not implemented')
}

const getTodos = ( filter = Filters.All )=>{
    
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        
        case Filters.Completed:
            return state.todos.filter( todo => todo.done )

        case Filters.Pending:
            return state.todos.filter( todo => !todo.done )

        default:
            throw new Error(`Option ${ filter } is not valid. `)
    }

}

/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) => {
    throw new Error("Not implemented");
};

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    throw new Error("Not implemented");
};

/**
 * 
 * @param {String} todoId 
 */
const deletTodo = (todoId) => {
    throw new Error("Not implemented");
};


const deleteCompleted = () => {
    throw new Error("Not implemented");
};


const setFilter = (newFilter = Filters.All) => {
    throw new Error("Not implemented");
};

const getCurrentFilter = () => {
    throw new Error("Not implemented");
};


export default {
    addTodo,
    deleteCompleted,
    deletTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
};