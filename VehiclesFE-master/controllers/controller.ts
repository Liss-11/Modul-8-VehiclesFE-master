
/* export { } */

var newCar: Car[] = new Array();
var cars: Car[] = new Array();

var nuevo_coche: any = document.querySelector('#nuevo_coche');
/* contador coches */
var i = 0;
/* contador interno ruedas */
var x = 0;

/* Formularios */

var formulario1: any = document.querySelector("#form1");
var formulario2: any = document.querySelector("#form2");
var pagina3: any = document.querySelector("#pagina3");

var listado: any = document.querySelector("#listado");

/* ventana modal que muestra el coche nuevo_coche */

 var modal_coche: any = document.querySelector('#modal-coche');


function validar_matricula(matricula:any) { 
    var regex = /^\d{4}[A-Z]{3}$/;
    return regex.test(matricula) ? true : false;
}

function miFunction(): void { 

    var acumErrores = 0;
    
    var matricula:any = document.querySelector('#matricula');
    var marca: any = document.querySelector('#marca');
    var color: any = document.querySelector('#color');

/* validacion */ 

    formulario1.classList.remove('is-invalid');
    
    var errorMatricula: any = document.getElementById("errorMatricula");
	
	if(matricula.value == "") {
		matricula.classList.add("is-invalid");
        
        errorMatricula.textContent = "Este campo es obligatorio";
        acumErrores ++;
    }else if(!validar_matricula(matricula.value)){
		matricula.classList.add("is-invalid");
		errorMatricula.innerText = "Fortmato matrícula 4 NÚMEROS Y 3 LETRAS MAYÚSCULAS";
		acumErrores ++;
	}

    if (marca.value == "") {
        marca.classList.add("is-invalid");
        var errorMarca: any = document.getElementById("errorMarca");
        errorMarca.textContent = "Este campo es obligatorio";
        acumErrores++;
    }

     if(color.value == "") {
		color.classList.add("is-invalid");
		var errorColor: any = document.getElementById("errorColor");
        errorColor.textContent = "Este campo es obligatorio";
		acumErrores ++;
    }

    
		
    if (acumErrores > 0){
        formulario1.classList.add('is-invalid');
    }else{
        formulario1.classList.remove('is-invalid');
        formulario1.classList.add("hide");
    formulario2.classList.remove("hide");

    createCar(matricula.value, marca.value, color.value);
	}
}

formulario1.addEventListener('click', (event: any) => {
	
	event.target.classList.remove('is-invalid');
});

    

function createCar(plate: string, brand: string, color: string) {
    let car = new Car(plate, color, brand);
    
    newCar[i] = car; 

    nuevo_coche.innerText = "FELICIDADES, has creado un nuevo coche! \n Con matrícula: " + car.plate
        + " \n De color: " + car.color + "\n Y de la marca: " + car.brand + "\n" + "Ahora añade las ruedas!!";
       
    
}

function addWheels(): void { 

    var acumError:number = 0;
    var ruedas: Wheel[] = new Array;
    var diametros: any[] = new Array;
    

/* creación rueda 1 */

    var marca1: any = document.querySelector('#marca_r1');
    var diametro1: any = document.querySelector('#diametro_r1');
    var error_marca1: any = document.querySelector("#error_marca1");
    var error_diametro1: any = document.querySelector("#error_diametro1");

   /*  validacion bootstrap rueda1 */
    
    if (marca1.value == "") {
        marca1.classList.add("is-invalid");
        error_marca1.textContent = "Este campo es obligatorio";
        acumError++;
    }

    if (diametro1.value == "") {
        diametro1.classList.add("is-invalid");
        error_diametro1.textContent = "Este campo es obligatorio";
        acumError++;
    } else if (isNaN(diametro1.value) || diametro1.value < 0.4 || diametro1.value > 2) { 
        
        diametro1.classList.add("is-invalid");
        error_diametro1.textContent = "El diámetro debe ser un NÚMERO entre 0.4 y 2";
        acumError++;
    }

    var wheel1: Wheel = new Wheel(diametro1.value, marca1.value);
    
    /* newCar[i].addWheel(wheel1); */
    ruedas.push(wheel1);
    diametros.push(diametro1);

/* creación rueda 2 */
    
    var marca2: any = document.querySelector('#marca_r2');
    var diametro2: any = document.querySelector('#diametro_r2');
    var error_marca2: any = document.querySelector("#error_marca2");
    var error_diametro2: any = document.querySelector("#error_diametro2");
    

    /*  validacion bootstrap rueda2 */
    
    if (marca2.value == "") {
        marca2.classList.add("is-invalid");
        error_marca2.textContent = "Este campo es obligatorio";
        acumError++;
    }

    if (diametro2.value == "") {
        diametro2.classList.add("is-invalid");
        error_diametro2.textContent = "Este campo es obligatorio";
        acumError++;
    } else if (isNaN(diametro2.value) || diametro2.value < 0.4 || diametro2.value > 2) { 
        
        diametro2.classList.add("is-invalid");
        error_diametro2.textContent = "El diámetro debe ser un NÚMERO entre 0.4 y 2";
        acumError++;
    }

    var wheel2: Wheel = new Wheel(diametro2.value, marca2.value);
    
/* newCar[i].addWheel(wheel2); */
    ruedas.push(wheel2);
    diametros.push(diametro2);

/* creación rueda 3 */
    

    var marca3: any = document.querySelector('#marca_r3');
    var diametro3: any = document.querySelector('#diametro_r3');
    var error_marca3: any = document.querySelector("#error_marca3");
    var error_diametro3: any = document.querySelector("#error_diametro3");

    /*  validacion bootstrap rueda3 */
    
    if (marca3.value == "") {
        marca3.classList.add("is-invalid");
        error_marca3.textContent = "Este campo es obligatorio";
        acumError++;
    }

    if (diametro3.value == "") {
        diametro3.classList.add("is-invalid");
        error_diametro3.textContent = "Este campo es obligatorio";
        acumError++;
    } else if (isNaN(diametro3.value) || diametro3.value < 0.4 || diametro3.value > 2 ) { 
        
        diametro3.classList.add("is-invalid");
        error_diametro3.textContent = "El diámetro debe ser un NÚMERO entre 0.4 y 2";
        acumError++;
    }

    var wheel3: Wheel = new Wheel(diametro3.value, marca3.value);

/* newCar[i].addWheel(wheel3); */
    ruedas.push(wheel3);
    diametros.push(diametro3);

/* creación rueda 4 */

    var marca4: any = document.querySelector('#marca_r4');
    var diametro4: any = document.querySelector('#diametro_r4');
    var error_marca4: any = document.querySelector("#error_marca4");
    var error_diametro4: any = document.querySelector("#error_diametro4");

/*  validacion bootstrap rueda3 */
    
    if (marca4.value == "") {
        marca4.classList.add("is-invalid");
        error_marca4.textContent = "Este campo es obligatorio";
        acumError++;
    }

    if (diametro4.value == "") {
        diametro4.classList.add("is-invalid");
        error_diametro4.textContent = "Este campo es obligatorio";
        acumError++;
    } else if (isNaN(diametro4.value) || diametro4.value < 0.4 || diametro4.value > 2){ 
        
        diametro4.classList.add("is-invalid");
        error_diametro4.textContent = "El diámetro debe ser un NÚMERO entre 0.4 y 2";
        acumError++;
    }
    var wheel4: Wheel = new Wheel(diametro4.value, marca4.value);

/* newCar[i].addWheel(wheel4); */
    ruedas.push(wheel4);
    diametros.push(diametro4);

   /* diametros con error */
    var x: any[] = new Array;

    diametros.forEach((element, index) => {

        
        if (element.value < 0.4 || element.value > 2) {

            x[index] = index+1;
            

        } else { 
            
            x[index] = "";
            

        }

    });

   /*  vantana modal errorRuedas Titulo */
    var ruedasMal: any = document.querySelector("#staticBackdropLabel");
   
    /* boton para cerrar la ventada modal */
    var corregirRueda:any = document.querySelector("#corregirRueda");
    
    if (acumError > 0) {
            
          ruedasMal.textContent = "Error Ruedas";

            borrar_coche.classList.add("hide");

            corregirRueda.classList.remove("hide");

            guardar_coches.classList.add("hide");

        modal_coche.innerText = "El diámetro de la/s rueda/s " + x[0] + " " + x[1] + " " + x[2] + " " + x[3] + " es incorrecto";
            
        x = [];
        

            
        } else { 
            ruedas.forEach(element => { 

                newCar[i].addWheel(element);
            })
            ruedasMal.textContent = "Nuevo Coche";

            corregirRueda.classList.add("hide");

        guardar_coches.classList.remove("hide");
        
        borrar_coche.classList.remove("hide");

                modal_coche.innerText = "COCHE " + [i + 1] + " \n" + "MATRÍCULA: " + newCar[i].plate
                    + "\n COLOR: " + newCar[i].color + "\n MARCA: " + newCar[i].brand
                    + "\n RUEDA 1: marca - " + newCar[i].wheels[0].brand + "           diametro: " + newCar[i].wheels[0].diameter
                    + "\n RUEDA 2: marca - " + newCar[i].wheels[1].brand + "           diametro: " + newCar[i].wheels[1].diameter
                    + "\n RUEDA 3: marca - " + newCar[i].wheels[2].brand + "           diametro: " + newCar[i].wheels[2].diameter
                + "\n RUEDA 4: marca - " + newCar[i].wheels[3].brand + "           diametro: " + newCar[i].wheels[3].diameter;
            
            x = [];
            
            
          
    }
    

    formulario2.addEventListener('click', (event: any) => {
             
	event.target.classList.remove('is-invalid');
         });
    
    };

/* Boton para guardar coches */

var guardar_coches: any = document.querySelector('#guardar-coche');
guardar_coches.onclick = function () { 
    
    var coche: HTMLElement = document.createElement("div");
    coche.classList.add("mb-5");
    
    
    listado.appendChild(coche);
    coche.innerText = "COCHE " + [i + 1] + " \n \n MATRÍCULA: " + newCar[i].plate
        + "\n COLOR: " + newCar[i].color + "\n MARCA: " + newCar[i].brand
        + "\n RUEDA 1: marca - " + newCar[i].wheels[0].brand + "           diametro: " + newCar[i].wheels[0].diameter
        + "            RUEDA 2: marca - " + newCar[i].wheels[1].brand + "           diametro: " + newCar[i].wheels[1].diameter
        + "\n RUEDA 3: marca - " + newCar[i].wheels[2].brand + "           diametro: " + newCar[i].wheels[2].diameter
        + "            RUEDA 4: marca - " + newCar[i].wheels[3].brand + "           diametro: " + newCar[i].wheels[3].diameter;
    
    formulario2.classList.add("hide");
        pagina3.classList.remove("hide");
    
    i++;
    
}

/* Abrir el listado de los coches guardados */

var listado_coches: any = document.querySelector('#lista-coches');
listado_coches.onclick = function () { 
   

        formulario1.classList.add("hide");
        pagina3.classList.remove("hide");
  
}

/* borrar el coche creado */
 /* boton para borrar coche creado */
    var borrar_coche: any = document.querySelector("#borrar_coche");
borrar_coche.onclick = function () {

    formulario2.classList.add("hide");
    formulario1.classList.remove("hide");

}
 
/* borrar los coches guardados */

function borrarListado() { 

    listado.innerText = "";
    i = 0;
}


/* crear mas coches */

function addMoreCars() { 

    formulario1.classList.remove("hide");
    pagina3.classList.add("hide");
    formulario2.classList.add("hide");

    
}

/* limpiar los inputs */

function limpiar(elemento:any) {
    
    let limpiar: any = document.getElementById(elemento);
    limpiar.value = "";
  
}



 