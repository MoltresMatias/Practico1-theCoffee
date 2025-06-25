const carrito = [];
const lista = document.querySelectorAll('#Bebidas-cal input[type="checkbox"]');

lista.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const texto = checkbox.parentElement.textContent.trim();

    if (checkbox.checked) {
      // si esta marcado
      carrito.push(texto); // se introduce en la array
    } else {
      const i = carrito.indexOf(texto); // busca la posicion de texto en el array
      if (i !== -1) carrito.splice(i, 1); // si lo encuentra lo elimina
    }
    agregarCarrito();
  });
});

function agregarCarrito() {
  const agrega = document.getElementById("carrito");
  let contenido = "";
  for (let i = 0; i < carrito.length; i++) {
    contenido += `<li class="list-group-item">${carrito[i]}</li>`;
  }
  agrega.innerHTML = contenido;
}
