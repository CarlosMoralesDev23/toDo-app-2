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
        new Todo('Pedra del infinito'),
        new Todo('Pedra del tiempo'),
        new Todo('Pedra del poder'),
        new Todo('Pedra de la realidad'),
    ],

    filter : Filters.All,
}

const initStore = ()=>{
    // console.log(state)
    console.log('InitStore 🍉')
}

const loadStore = ()=>{
    throw new Error('Not implemented')
}

const saveStateTolocalStorage = ()=>{
    localStorage.setItem('state', 'Hola Mundo')
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
    if (!description) throw new Error('Description is required')

    state.todos.push( new Todo(description) );

    saveStateTolocalStorage()
};

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map ( todo => {
        if ( todo.id === todoId ){
            todo.done = !todo.done
        }

        return todo
    })

    saveStateTolocalStorage()
};

/**
 * 
 * @param {String} todoId 
 */
const deletTodo = (todoId) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId)

    saveStateTolocalStorage()
};


const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done )

    saveStateTolocalStorage()
};


const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;

    saveStateTolocalStorage()
};

const getCurrentFilter = () => {
    return state.filter;

    
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