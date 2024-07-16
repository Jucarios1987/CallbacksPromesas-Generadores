/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentsComponents = ( element ) => {
    
    // En veat podemos acceder a las variables de entorno de la siguiente manera.
    console.log( import.meta.env );
    const html = `
        variables:
    `;
    element.innerHTML = html;
};