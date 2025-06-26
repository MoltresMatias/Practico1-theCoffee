const carrito = [];
const list = [];
const lista1 = document.querySelectorAll('#Bebidas-cal input[type="checkbox"]');
const lista2 = document.querySelectorAll('#Bebidas-fri input[type="checkbox"]');
lista1.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const texto = checkbox.parentElement.textContent.trim();

    if (checkbox.checked) { // si esta marcado
      carrito.push(texto); // se introduce en la array
    } else {
      const i = carrito.indexOf(texto); // busca la posicion de texto en el array
      if (i !== -1) carrito.splice(i, 1); // si lo encuentra lo elimina
    }
    agregarCarrito();
  });
});

lista2.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const texto = checkbox.parentElement.textContent.trim();

    if (checkbox.checked) { // si esta marcado
      carrito.push(texto); // se introduce en la array
    } else {
      const i = carrito.indexOf(texto); // busca la posicion de texto en el array
      if (i !== -1) carrito.splice(i, 1); // si lo encuentra lo elimina
    }
    agregarCarrito();
  });
});

lista1.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const texto = checkbox.parentElement.textContent.trim();

    if (checkbox.checked) { // si esta marcado
      list.push(texto); // se introduce en la array
    } else {
      const i = list.indexOf(texto); // busca la posicion de texto en el array
      if (i !== -1) list.splice(i, 1); // si lo encuentra lo elimina
    }
    agregarCarrito();
  });
});

lista2.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const texto = checkbox.parentElement.textContent.trim();

    if (checkbox.checked) { // si esta marcado
      list.push(texto); // se introduce en la array
    } else {
      const i = list.indexOf(texto); // busca la posicion de texto en el array
      if (i !== -1) list.splice(i, 1); // si lo encuentra lo elimina
    }
    agregarCarrito();
  });
});

function agregarCarrito() {
  const agrega = document.getElementById("carrito");
  const agregar = document.getElementById("list");
  let contenido = "";
  for (let i = 0; i < carrito.length; i++) {
    contenido += `<li class="list-group-item d-flex align-items-center gap-2 text-secondary-emphasis">${carrito[i]}</li>`;
  }
  agrega.innerHTML = contenido;
  agregar.innerHTML = contenido;
}

let botonPedido = document.createElement("button");
botonPedido.setAttribute("class", "btn-color mt-3 mx-auto d-grid");
botonPedido.textContent = "Confirmar";

botonPedido.addEventListener("click", function (e) {
  e.preventDefault();

  function ventana() {
    const div = document.getElementById("popup");
    div.style.display = "block";
  }

  function desactivarCheck() {
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => (checkbox.disabled = true));
  }

  ventana();
  desactivarCheck();
});

carrito_compras.appendChild(botonPedido);
