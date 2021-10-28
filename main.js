// #eje1 Alerta de saludo a un usuario ingresando su nombre
// let nombre = prompt("Ingrese su nombre");

// function saludar(nom) {
//     alert("Bienvenido usuario : " + nom + ".  :D");
// }
// saludar(nombre);

// #ej2 solicitar la edad para que conduzca o nombre
// let annio = prompt("Ingrese el año en que nacio");

// function mayor_edad(year){
//     resultado= 2021 -  year;
//     if(resultado <18){
//         alert("Tas muy chiquito para conducir >:(");
//     }else{
//         alert("Tas Enorme, ve por un mandado en el carro ");
//     }
// }

// mayor_edad(annio);

// #ej3 promedio de calificaciones
// let cal1 = prompt("Ingrese calificacion 1");
// let cal2 = prompt("Ingrese calificacion 2");
// let cal3 = prompt("Ingrese calificacion 3");
// let cal4 = prompt("Ingrese calificacion 4");
// let cal5 = prompt("Ingrese calificacion 5");

// cal1 =parseFloat(cal1);
// cal2 =parseFloat(cal2);
// cal3 =parseFloat(cal3);
// cal4 =parseFloat(cal4);
// cal5 =parseFloat(cal5);
// let r;
// r = (cal1+cal2+cal3+cal4+cal5)/5;
// if(r<3){
//     alert("Muy deficiente");
// }else if(r>=3 && r<5){
//     alert("Insuficiente");
// }else if(r>=5 && r<6){
//     alert("Suficiente")
// }else if(r>=6 && r<7){
//     alert("Bien")
// }else if(r>=7 && r<9){
//     alert("Muy bien")
// }
// else if(r>=9 && r<10){
//     alert("Excelente")
// }else if(r>=10){
//     alert("Sobre Excelente");
// }

// #ej4 solicitar n materias promedio
// let n = prompt("Ingrese numero de materias");
// let r,acumulador;
// acumulador = parseInt(acumulador);
// r=parseFloat(r);

// for(let i =0; i<n; i++){
//     acumulador = prompt("Ingrese calificacion"+i);
//     acumulador += acumulador;
//     r = acumulador/n;
// }
// alert("El promedio es :"+ r);

// #5 fibonaci
// var limit = prompt("Ingrese el numero de limite para la figura fibonaci");
// 	var fibo = [0,1];
// 	for(i=2; i <= limit; i++){
// 		fibo.push(fibo[i-1] + fibo[i-2]);
// 		document.write(fibo[i]+"<br/>");	
// 	}