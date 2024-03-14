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

