
// creare - renderizara la aplicación
// El elementId sera el elemento donde se renderizara la app


import html from './app.html?raw'

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId)=>{

    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html
        document.querySelector(elementId).append(app)
    })();
}