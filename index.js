
const fotos = document.querySelectorAll('#image img')
const galeria = document.getElementById('image')

let div = document.createElement('div');
div.setAttribute('class', 'col-12 cont-image w-auto my-5');
div.setAttribute('id', 'cont-img');

galeria.appendChild(div)




fotos.forEach((img) => {
    img.addEventListener('click', () => {
        div.innerHTML = ``
        const copia = img.cloneNode(true);
        const agrega = document.getElementById("cont-img");
        copia.id = ''
        copia.classList.replace('imagen2','img-fluid')
        copia.classList.add('rounded-3')
        copia.removeAttribute('type')
        
        //copia.setAttribute('width', '60%')

        let close = document.createElement('h3');
        close.textContent = '☒';
        close.setAttribute('class', 'position-absolute text-light fs-1 px-2')
        close.setAttribute('type', 'button')

        div.appendChild(close)

        close.addEventListener('click', () => {
            div.innerHTML = ``
        })
        

        agrega.appendChild(copia)
        })
})



