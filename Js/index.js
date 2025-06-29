const extrae = new Extraer

const fotos = document.querySelectorAll('#image img')
const galeria = document.getElementById('image')

let div = document.createElement('div');
div.setAttribute('class', 'col-12  w-auto my-5');
div.setAttribute('id', 'cont-img');

galeria.appendChild(div)


fotos.forEach((img) => {
    img.addEventListener('click', () => {
        div.innerHTML = ``
        
        extrae.imagenes = img.cloneNode(true);
        const agrega = document.getElementById("cont-img");
        extrae.imagenes.id = ''
        extrae.imagenes.classList.replace('imagen2','img-fluid')
        extrae.imagenes.classList.add('rounded-3')
        extrae.imagenes.removeAttribute('type')
        

        extrae.close = document.createElement('h3');
        extrae.close.textContent = '✕';
        extrae.close.setAttribute('class', 'position-absolute fw-bold text-light fs-4 p-2 ')
        extrae.close.setAttribute('type', 'button')

        extrae.textos = document.createElement('p');
        extrae.textos.textContent = img.dataset.description
        extrae.textos.classList.add('descrip', 'p-3', 'text-center');
        
        agrega.appendChild(extrae.textos)
        div.appendChild(extrae.close)
        extrae.close.addEventListener('click', () => {
            div.innerHTML = ``
        })
        agrega.appendChild(extrae.imagenes)
        
        })
})



