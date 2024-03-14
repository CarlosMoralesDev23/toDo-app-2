
// creare - renderizara la aplicación
// El elementId sera el elemento donde se renderizara la app


import todoStore from '../store/todo.store';
import html from './app.html?raw'
import { renderTodos } from './use-cases';

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId)=>{

    const displayTodos = ()=>{
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos()
    }



    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html
        document.querySelector(elementId).append(app)
    })();
}