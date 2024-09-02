//Ejercicio 1
/*
Crea tres arrays de 5 números cada uno, luego escribe una función declarativa que reciba los tres arrays como parámetros y realice las siguientes tareas:
- Unir los tres arrays en un nuevo array llamado 'integrados' 
- Ordenar el array de menor a mayor
- Crear un nuevo array que contenga todos los números del array 'integrados' que sean menores de 60.
*/

//Ejercicio 2
/*
Cotizadoción Dolar
Escribe una función de flecha que reciba como parámetro un valor en dolar y calcule su valor en pesos argentinos. Modifica dicha función para que se pueda enviar como parámetro también el valor del dolar oficial para realizar el cálculo.
*/

//Ejercicio 3
/*
Escribe una función anónima que reciba una palabra o frase cómo parámetro y retorne cuantas vocales contiene.
*/

//Ejercicio 4 
/*
Dado el siguiente texto:
"Érase una vez en el año 1976, en un pequeño garaje en Los Altos, California, donde dos jóvenes visionarios, Steve Jobs y Steve Wozniak, se unieron para cambiar el mundo de la tecnología para siempre. Estos dos amigos compartían una pasión por la electrónica y la informática, y estaban decididos a crear algo revolucionario.
Steve Wozniak, conocido cariñosamente como "Woz", era un genio autodidacta de la electrónica. Trabajaba en Hewlett-Packard, pero en su tiempo libre soñaba con construir una computadora personal. En ese entonces, las computadoras eran enormes, costosas y sólo accesibles para las grandes empresas y universidades. Pero Woz tenía una visión diferente: quería crear una computadora que cualquiera pudiera tener en su hogar.
Steve Jobs, en cambio, era el visionario y el hombre de negocios. Reconoció el potencial del proyecto de Woz y se propuso hacerlo realidad. Pero había un problema: no tenían dinero para fabricar la computadora. Jobs vendió su furgoneta Volkswagen y Wozniak vendió su calculadora científica HP-65 para reunir fondos. Con este dinero, compraron los componentes necesarios para construir el primer prototipo de su computadora."

Crear una función anónima que reciba el texto como parámetro y retorne la cantidad de veces que aparece la palabra 'computadora' en el mismo.
Luego usar dicha función para devolver en el navegador un mensaje que diga 'La palabra... aparece ... veces en el texto original'
*/


//Ejercicio 5
/*
Biblioteca
Diseña una función declarativa que reciba como parámetro un array y muestre la lista de sus elementos alfabéticamente y como si fuera una lista ordenada de html.
Declara un array de 10 elementos que contenga libros de cualquier categoría y úsalo como argumento de la función anterior.
Ejemplo de como debería verse en el navegador:
1 - Biografía de Stev Jobs
2 - Casa blanca
3 - ....
*/

//1
let array1 = [10, 2, 5, 3, 20];
let array2 = [1, 4, 7, 50, 110];
let array3 = [200, 6, 22, 19, 9]; 

function cargaArrays(array1, array2, array3) {
    let integrados = array1.concat(array2, array3);

    integrados.sort(function(a, b){
        return a - b;
    });

    menoresA60 = integrados.filter(function(num){
        return num < 60
    });

    console.log(`array concat ${integrados}`);
    console.log(`Números menores menores a 60: ${menoresA60}`)
}

cargaArrays(array1, array2, array3);


//2
const convertidorDeDolares = (dolar, valorDolar) => dolar * valorDolar;

let dolar = 1000;
let valorDolar = 953;
let pesosArgentinos = convertidorDeDolares(dolar, valorDolar);

console.log(`El valor ingresado a ARS es de: ${pesosArgentinos}`);

// 3

const contadorDeVocales = function (cadena, ) {
    const encontradas = cadena.match(/[aeiouAEIOU]/g);
    return encontradas ? encontradas.length: 0;
}

let texto = "Hola, estoy muy bien";
let cantidadDeVocales = contadorDeVocales(texto);

console.log(`El texto ingresado tiene ${cantidadDeVocales} vocales`);

// 4 

let textoLargo = `"Érase una vez en el año 1976, en un pequeño garaje en Los Altos, California, donde dos jóvenes visionarios, Steve Jobs y Steve Wozniak, se unieron para cambiar el mundo de la tecnología para siempre. Estos dos amigos compartían una pasión por la electrónica y la informática, y estaban decididos a crear algo revolucionario.
Steve Wozniak, conocido cariñosamente como "Woz", era un genio autodidacta de la electrónica. Trabajaba en Hewlett-Packard, pero en su tiempo libre soñaba con construir una computadora personal. En ese entonces, las computadoras eran enormes, costosas y sólo accesibles para las grandes empresas y universidades. Pero Woz tenía una visión diferente: quería crear una computadora que cualquiera pudiera tener en su hogar.
Steve Jobs, en cambio, era el visionario y el hombre de negocios. Reconoció el potencial del proyecto de Woz y se propuso hacerlo realidad. Pero había un problema: no tenían dinero para fabricar la computadora. Jobs vendió su furgoneta Volkswagen y Wozniak vendió su calculadora científica HP-65 para reunir fondos. Con este dinero, compraron los componentes necesarios para construir el primer prototipo de su computadora."`

const buscadorTexto = (textoLargo) => {
    const computadora = textoLargo.match(/computadora/gi);
    return computadora ? computadora.length: 0;
}

let computadoraCantidad = buscadorTexto(textoLargo);

console.log(`La palabra Computadora aparece ${computadoraCantidad} veces en el texto original`);

// 5

let libros = ["El programador pragmático", "Code Complete", "El Aprendiz del Brujo", "1984", "Don Quijote de la Mancha", "Algoritmos a Fondo", "Programación en C/C++"]
function mostrarLibrosOrdenados(libros) {
    libros.sort();

    let listaHTML = "<ol>";

    libros.forEach(function(libro) {
        listaHTML += `<li>${libro}</li>`;
    });

    listaHTML += "</ol>";

    document.body.innerHTML = listaHTML;
}

mostrarLibrosOrdenados(libros);