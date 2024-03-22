




function buscarProfesor() {
    var nombreProfesor = document.getElementById("busquedaProfesor").value.toLowerCase();
    
    // Realizar la redirección a la página del profesor utilizando una ruta relativa
    if (nombreProfesor.includes("arelis manzueta") ) {
        window.location.href = "ARELIS MANZUETA SANCHEZ.html";
    } 

    else if (nombreProfesor.includes("andres almonte") ) {
        window.location.href = "ANDRES ALEXANDER ALMONTE UREÑA.html";
    }
    
    else if (nombreProfesor.includes("andres patiño") ) {
        window.location.href = "ANDRES DAVID PATIÑO MATOS.html";
    }

    else if (nombreProfesor.includes("clara baez") ) {
        window.location.href = "CLARA LUZ BAEZ GOMEZ.html";
    }


    else if (nombreProfesor.includes("claudio brazoban") ) {
        window.location.href = "CLAUDIO BRAZOBAN MATEO.html";
    }


    else if (nombreProfesor.includes("cristobal figuereo")) {
        window.location.href = "CRISTOBAL FIGUEREO JIMENEZ.html";
    }
    
    
    else if (nombreProfesor.includes("duarte espinal") ) {
        window.location.href = "DUARTE ALFONSO ESPINAL PEGUERO.html";
    }
    
    
    else if (nombreProfesor.includes("eugeneris de la rosa")) {
        window.location.href = "EUGENERYS LUCIA DE LA ROSA FERNANDEZ.html";
    }
    
    
    else if (nombreProfesor.includes("jorge") || nombreProfesor.includes("aquino") ) {
        window.location.href = "JORGE AQUINO FURCAL.html";
    }
    
    
    else if (nombreProfesor.includes("mario castillo") ) {
        window.location.href = "MARIO ROBINSON CASTILLO THEN.html";
    }


    else if (nombreProfesor.includes("nora rubirosa") ) {
        window.location.href = "NORA MARTINA RUBIROSA DE CASTRO.html";
    }
    
    
    else if (nombreProfesor.includes("pedro german") ) {
        window.location.href = "PEDRO DAMIAN GERMAN JAIME.html";
    }

    else if (nombreProfesor.includes("raymundo sencion") ) {
        window.location.href = "RAYMUNDO SENCION PEREZ.html";
    }

    else if (nombreProfesor.includes("roberto lantigua") ) {
        window.location.href = "ROBERTO LANTIGUA PEREYRA.html";
    }

    else if (nombreProfesor.includes("roberto mejia") ) {
        window.location.href = "ROBERTO MEJIA RAMIREZ.html";
    }

    
    else if (nombreProfesor.includes("sonia lara") ) {
        window.location.href = "SONIA MARITZA LARA ANDUJAR.html";
    }

    
    else if (nombreProfesor.includes("?????") ) {
        window.location.href = "??????????.html";
    }


    
    else if (nombreProfesor.includes("?????") ) {
        window.location.href = "??????????.html";
    }


    
    else if (nombreProfesor.includes("?????") ) {
        window.location.href = "??????????.html";
    }

    else {
        // Manejar el caso en el que el profesor no se encuentre en la lista
        alert("Profesor no encontrado, recuerda usar solo el primer nombre y primer apellido sin acentos o caracteres especiales.");
    }
}





/* ESTA ES SOLO OTRA MANERA DE BUSCAR LOS PROFESORES QUE AUN NO ESTA IMPLEMENTADA. FAVOR DEJAR ESTA PARTE COMO COMENTARIO.

function buscarProfesor() {
    var nombreProfesor = document.getElementById("busquedaProfesor").value.toLowerCase();
  
    // Realizar una solicitud HTTP para obtener los datos de los profesores desde el archivo JSON
    fetch("profesores.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(profesores) {
        // Aquí puedes utilizar la lógica para buscar el profesor con más coincidencias, similar al código que te proporcioné anteriormente
        // ...
      })
      .catch(function(error) {
        console.log("Error al obtener los datos de los profesores:", error);
      });
  }
  


*/
