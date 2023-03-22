export class UI {
    /**
     * Agregar un nuevo Producto 
     * @param {Object} producto
     */
    agregarProductos(producto) {
      const listaProductos = document.getElementById("product-list");
      const elementos = document.createElement("div");
      elementos.innerHTML = `
              <div class="card text-center mb-4">
                  <div class="card-body">
                      <strong>Nombre</strong>: ${producto.nombre} -
                      <strong>Precio</strong>: ${producto.precio} - 
                      <strong>Cantidad</strong>: ${producto.cantidad}
                      <a href="#" class="btn btn-danger" name="Eliminar">Eliminar</a>
                  </div>
              </div>  
          `;
      listaProductos.appendChild(elementos);
    }
  
    resetearFormulario() {
      document.getElementById("product-form").reset();
    }
  
    eliminaProductos(elementos) {
      if (elementos.name === "Eliminar") {
        elementos.parentElement.parentElement.remove();
        this.showMessage("Producto eliminado correctamente", "success");
      }
    }
  
    mostrarMensaje(message, cssClass) {
      const div = document.createElement("div");
      div.className = `alert alert-${cssClass} mt-2`;
      div.appendChild(document.createTextNode(message));
  
      const container = document.querySelector(".container");
      const app = document.querySelector("#App");
  
      container.insertBefore(div, app);
  
      // Eliminar el mensajes despues de 3 segundos.
      setTimeout(function () {
        document.querySelector(".alert").remove();
      }, 3000);
    }
  }