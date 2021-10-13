
//**** DESCRIPCIÓN DE ENTREGA ****/
//** En este desafio #5 genere una plataforma para el ingreso de los items de titulos de videojuegos. Mediante una funcion se realiza el ingreso, utilizando prompts, de los datos por cada item.*/
//** Estos datos se pasan a un objeto contructor para que, mediante un metodo se muestren en consola las propiedades junto con los datos ingresados para cada objeto.*/

//**** DECLARACION DE VARIABLES GLOBALES ****/
const btnEjec = document.querySelector('#btnEjec'); // Como parte de sumar optimizacion al codigo, aplique algo de interaccion con el codigo HTML mediante un boton de ejecucion, y bootstrap.
let confirmacion = true;   
let id = 0; // Inicializo el identificador del item, el cual se incrementara con la creacion de cada objeto.

btnEjec.addEventListener('click', () => { // Llamado ejecucion del script mediante click del boton en el HTML.

//**** OBJECT CONSTRUCTOR ****/
class VideoJuego {
    constructor(id, titulo, plataforma, genero, anio, stock){  // Recibe los datos ingresados por prompts.
        this.id = id;
        this.titulo = titulo;
        this.plataforma = plataforma;
        this.genero = genero;
        this.anio = anio;
        this.stock = stock;
    }
    printConsole(){ // Método impresion en consola de las propiedades y datos de los objetos.
    console.log(`%cITEM #${this.id}`,'color: black; font-weight: bold; background:#0f0;'); // Se aplica un poco de estilo al encabezado en consola.
    console.log(`TÍTULO: ${this.titulo}\nPLATAFORMA: ${this.plataforma}\nGENERO: ${this.genero}\nAÑO: ${this.anio}\nSTOCK: ${this.stock}\n----------------------------\n`);
    
    }
}

//**** FUNCIÓN DE SOLICITUD DE INGRESO DE DATOS ****/
const ingresarDatos = () => {

    let titulo = prompt('Ingrese nombre videojuego.', 'MORTAL KOMBAT 4'); // Se solicita nombre videojuego, se carga un valor por defecto para facilitar la revisión del desafio.
    titulo === null ? titulo ='SIN NOMBRE' : titulo = titulo.toUpperCase(); // Con fines prácticos, en caso de seleccionar la cancelacion del prompt, se cargara un 'SIN NOMBRE' en la variable.
    
    let plataforma = prompt('Ingrese plataforma videojuego.', 'PC'); // Se solicita la plataforma, se carga un valor por defecto para facilitar la revisión del desafio.
    plataforma === null ? plataforma ='SIN PLATAFORMA' : plataforma = plataforma.toUpperCase(); // Con fines prácticos, en caso de seleccionar la cancelacion del prompt, se cargara un 'SIN PLATAFORMA' en la variable.

    let genero = prompt('Ingrese genero videojuego.', 'ACCION'); // Se solicita genero, se carga un valor por defecto para facilitar la revisión del desafio.
    genero === null ? genero = 'SIN GENERO' : genero = genero.toUpperCase(); // Con fines prácticos, en caso de seleccionar la cancelacion del prompt, se cargara un 'SIN GENERO' en la variable.

    let anio = parseInt(prompt('Ingrese año videojuego.', 1997)); // Se solicita año, se carga un valor por defecto para facilitar la revisión del desafio.
    isNaN(anio) ? anio = 0 : anio = anio; // Con fines prácticos, en caso de seleccionar la cancelacion del prompt, se cargara un valor de 0 en la variable.

    let stock = parseInt(prompt('Ingrese stock videojuego.', 120)); // Se solicita stock, se carga un valor por defecto para facilitar la revisión del desafio.
    isNaN(stock) ? stock = 0 : stock = stock; // Con fines prácticos, en caso de seleccionar la cancelacion del prompt, se cargara un valor de 0 en la variable.
    

    return {titulo , plataforma, genero, anio, stock} ; // Retorna mediante un objeto literal los datos ingresados.
}

//**** RAMA PRINCIPAL DE EJECUCIÓN DEL SCRIPT ****/
do { // Mediante el do.. while se solicita al menos la creación de un objeto, y se pregunta al usuario si desea continuar con la ejecución.
    const {titulo, plataforma, genero, anio, stock} = ingresarDatos(); // Se realiza la desestructuración del objeto literal recibido de la funcion ingresarDatos.

    if(titulo === '' ) { // Se controla que el dato del nombre del video juego no este vacio.

    console.warn('Error: Item no valido - Debe asignar un Nombre al item.'); // De encontrarse vacio, se envia una advertencia en consola y se vuelve a solicitar el ingreso de los datos.

    } else { // Caso contrario:

    id++ // ... se incrementa el identificador del item (declarado en forma global), y se envia junto con los demas datos al constructor.
    let itemGame = new VideoJuego(id, titulo, plataforma, genero, anio , stock); // Nuevo objeto creado.
    itemGame.printConsole(); // Se llama el método para la impresion en consola del ojeto.

    }
    
    confirmacion = confirm("Desea ingresar un nuevo item?."); // Se pregunta al usuario si desea continuar con la ejecución del script.

} while(confirmacion);

}); // Cierre alcance ejecución boton de ejecucion en el HTML.