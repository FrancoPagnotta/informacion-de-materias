
// FUNCION ARROW QUE VA A CONTENER LAS MATERIAS
const obtenerInformacion = (materia) => { 
    let materias = { 
        fisica:["perez","pedro","pepito","cofla","maria"], 
        programacion:["rodriguez","pedro","juan","pepito"],
        logica:["hernandez","pedro","juan","pepito","cofla","maria"],
        quimica:["fran","pedro","juan","pepito","cofla","maria"]
    }
    
    if (materias[materia] !== undefined) { 
    return [materias[materia],materia,materias];  
} else {
    return materias;
    }
}

// FUNCION ARROW QUE ME VA A MOSTRAR EL PROFE Y LOS ALUMNOS DE LA MATERIA
const mostrarInformacion = (materia) => { 
    let informacion = obtenerInformacion(materia);  
    
    if (informacion !== false) { 
        let asignatura = informacion[1] 
        let profesor = informacion[0][0]
        let alumnos = informacion[0]; 
        alumnos.shift(); 
        document.write(`El profesor a cargo en la materia <b>${asignatura}</b> es: <b style='color:red'>${profesor}</b> ` + "<br>"); 
        document.write(`Los alumnos presentes en la materia <b>${asignatura}</b> son: <b style='color:green'>${alumnos}</b><br><br>`); 
    }

}

//FUNCION ARROW QUE NOS DICE EN CUANTAS CLASES ESTA UN ALUMNO
const cantidadDeClases = (alumno) => { 
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0; 
    for (info in informacion) {  
        if (informacion[info].includes(alumno)) {
            cantidadTotal++; 
            clasesPresentes.push(info); 
        }
    }
    document.write(`El alumno <b style='color:blue'>${alumno}</b> esta presente en las siguientes <b>${cantidadTotal}</b> clases: <b>${clasesPresentes}</b> <br><br>`);
}   

// MOSTRAMOS LOS PROFES Y ALUMNOS DE CADA MATERIA
mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

//MOSTRAMOS EN CUANTAS CLASES ESTA PRESENTE CADA ALUMNO
cantidadDeClases("cofla");
cantidadDeClases("juan");
cantidadDeClases("pedro");
cantidadDeClases("pepito");
cantidadDeClases("maria");

