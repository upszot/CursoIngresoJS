/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

/*
				<input type="text"  placeholder="Ingrese Precio" id="PrecioUno">
				<input type="text"  placeholder="Ingrese Precio" id="PrecioDos">
				<input type="text"  placeholder="Ingrese Precio" id="PrecioTres">
*/

function Sumar () 
{
	var suma= parseInt( document.getElementById('PrecioUno').value)  +
	          parseInt( document.getElementById('PrecioDos').value)  +
	          parseInt( document.getElementById('PrecioTres').value) ;

    alert("suma de los productos: " + parseInt(suma));

}

function Promedio () 
{

	var suma= parseInt( document.getElementById('PrecioUno').value)  +
	          parseInt( document.getElementById('PrecioDos').value)  +
	          parseInt( document.getElementById('PrecioTres').value) ;

    alert("Promedio de los productos: " + parseInt(suma) / 3 );
	
}

function PrecioFinal () 
{
	var precio1_iva = parseInt( document.getElementById('PrecioUno').value) *1.21 ;
	var precio2_iva = parseInt( document.getElementById('PrecioDos').value)  *1.21;
	var precio3_iva = parseInt( document.getElementById('PrecioTres').value) *1.21 ;

    alert("Precio de los productos con IVA:   \n" +  "1er Producto: " +  precio1_iva + "\n"
    	                                          +  "2do Producto: " +  precio2_iva + "\n"
    	                                          +  "3er Producto: " +  precio3_iva );
	
	console.log ("hola");
}

//console.log ("hola");
