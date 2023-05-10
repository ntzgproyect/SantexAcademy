export class Carrito {
   Productos = []
   MontoTotal = 0;

   agregarProducto(producto, precio, unidades) {
   if(producto === this.Productos.find(producto)){
   console.log('ya existe' + ' ' + producto)
   }
   else{
    this.Productos.push(producto)
    this.MontoTotal+= precio * unidades 
   }
   }

    constructor(producto) {
        this.MontoTotal = 0
        this.Productos = ''
        This.agregarProducto(producto, precio, unidades)
    }
 
}



