/** 
 *  
 * Te han contratado en una empresa de venta de ropa. Se llegó el buen fin y una de tus tareas es que calcules 
 ¿Cuál tendría que ser el precio final de un saco super padrísimo que cuesta 1560 que tiene un descuento de 18%?
¿Cuáles tendrían que ser las modificaciones que tendrías que hacer en caso de que el descuento sea 10%.
 * a)descuento es 18%-->0.18
 b)descuento es 18%-->0.18
*/

//a)
let costoSaco=prompt("dame el precio del saco");
let descuento=.18;
let preciFinal1=(parseFloat(costoSaco))*descuento;
console.log(preciFinal1);
//b)
let descuento_2=.10;
let preciFinal2=(parseFloat(costoSaco))*descuento_2;
console.log(preciFinal2);