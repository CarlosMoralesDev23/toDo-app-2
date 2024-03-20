
// creare - renderizara la aplicación
// El elementId sera el elemento donde se renderizara la app


import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw'
import { renderTodos } from './use-cases';


const ElementIDs = {
    ClearCompleted : '.clear-completed',
    TodoList: ".todo-list",
    NewTodoInput: "#new-todo-input",
    TodoFilters : '.filtro'
};

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId)=>{

    const displayTodos = ()=>{
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList, todos)
    }



    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html
        document.querySelector(elementId).append(app)
        displayTodos()
    })();


    //referencias HTML
    const newDescriptionInput = document.querySelector( ElementIDs.NewTodoInput )
    const todoListUL = document.querySelector( ElementIDs.TodoList )
    const clearCompletedButton = document.querySelector( ElementIDs.ClearCompleted)
    const filtersLIs = document.querySelectorAll( ElementIDs.TodoFilters)

    // Listeners
    newDescriptionInput.addEventListener('keyup', (event)=>{
        //*   1-  keyup  escuchara cada tecla
                // console.log(event)                     útil para leer los event
        // console.log(event.target)
        // console.log(event.target.value)

        //*   2- Mientras la tecla no sea Enter keyCode=13 se seguiran acumulando caracteres
        if (event.keyCode !== 13) return



        //*   3- Si luego del "enter"; al aplicar trim, que quita espacios al principo y final, tiene longuitud Cero, la función no hace nada. 
        if (event.target.value.trim().length === 0) return



        //*   4- Si la tecla fue Enter y ademas la longuitud fue mayor a Cero,  entonces la función continua con...
        todoStore.addTodo ( event.target.value );
        displayTodos();
        event.target.value = '';


    })

    todoListUL.addEventListener('click', (event)=>{
        const element = event.target.closest( '[data-id]' )
        todoStore.toggleTodo( element.getAttribute('data-id'))
        displayTodos()
    } )

    todoListUL.addEventListener('click', (event)=>{
        const isDestroy = event.target.className === 'destroy'
        const element = event.target.closest( '[data-id]')
        if( !element || !isDestroy ) return

        todoStore.deletTodo(element.getAttribute('data-id'))
        displayTodos()
    })

    clearCompletedButton.addEventListener("click", (event) => {
        todoStore.deleteCompleted()
        displayTodos();
    });

    filtersLIs.forEach( element => {

        console.log(element)

        element.addEventListener('click', (element) =>{
            
            filtersLIs.forEach( el => el.classList.remove('selected'))
            element.target.classList.add('selected')

            switch (element.target.text) {
                case 'Todos':
                    todoStore.setFilter(Filters.All)
                    break;
                case 'Pending':
                    todoStore.setFilter(Filters.Pending)
                    break;
                case 'Completed':
                    todoStore.setFilter(Filters.Completed)
                    break;
            
                default:
                    break;
            }

            displayTodos()


        })


    })
}