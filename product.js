/**
 * Clase Producto.
 */
export class Producto {
    /**
     *
     * @param {string} nombre El nombre del producto.
     * @param {number} precio El precio del producto.
     * @param {number} cantidad La cantidad del producto.
     */
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }