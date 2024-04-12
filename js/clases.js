class Persona {
    #nombre;
    #apellido;
    #dni;
    #estadoCivil;
    // Constructor de la clase Persona
    constructor(p_nombre, p_apellido,p_dni,p_estadoCivil) {
        this.#nombre = p_nombre;
        this.#apellido = p_apellido;
        this.#dni = p_dni;
        this.#estadoCivil = p_estadoCivil;

    }
    // Método getter para obtener el nombre completo de la persona
    get nombreCompleto(){
        return this.#nombre + ' ' + this.#apellido;
    }
    // Método getter para obtener el DNI de la persona
    get dni(){
        return this.#dni;
    }
    // Método setter para establecer el estado civil de la persona
    set estadoCivil(nuevoestadoCivil) {
        this.#estadoCivil = nuevoestadoCivil;
    }

    getInformacionPersona(){
        return 'Nombre:'+this.#nombre + ' Apellido:' + this.#apellido+' DNI:'+this.#dni+' EstadoCivil:'+this.#estadoCivil;
    }

}

class Empleado extends Persona {
    #anioIncorporacion;#nroDespacho;
    constructor(p_nombre, p_apellido,p_dni,p_estadoCivil,p_anioIncorporacion, p_nroDespacho) {
        super(p_nombre, p_apellido,p_dni,p_estadoCivil);
        this.#anioIncorporacion = p_anioIncorporacion;
        this.#nroDespacho = p_nroDespacho;
    }
    // Método setter para establecer el número de despacho del empleado
    set nroDespacho(nuevoNroDespacho) {
        this.#nroDespacho = nuevoNroDespacho;
    }
    // Método para obtener información del empleado
    getInformacionEmpleado(){
        return this.getInformacionPersona() + ' Año de Incorporacion:'+this.#anioIncorporacion +' Nro Despacho:'+this.#nroDespacho;
    }
}

class Estudiante extends Persona {
    #cursoMatriculado;// Curso en el que está matriculado el estudiante
    // Constructor de la clase Estudiante
    constructor(p_nombre, p_apellido,p_dni,p_estadoCivil,p_cursoMatriculado) {
        super(p_nombre, p_apellido,p_dni,p_estadoCivil);
        this.#cursoMatriculado = p_cursoMatriculado;
    }
    // Método setter para establecer el curso matriculado del estudiante
    set cursoMatriculado(nuevoCursoMatriculado) {
        this.#cursoMatriculado = nuevoCursoMatriculado;
    }
    // Método para obtener información del estudiante    
    getInformacionEstudiante(){
        return this.getInformacionPersona() + ' CursoMatriculado:'+this.#cursoMatriculado ;
    }    

}

class Profesor extends Empleado {
    #departamento;// Departamento al que pertenece el profesor

    // Constructor de la clase Profesor    
    constructor(p_nombre, p_apellido,p_dni,p_estadoCivil,p_anioIncorporacion,p_nroDespacho,p_departamento) {
        super(p_nombre, p_apellido,p_dni,p_estadoCivil,p_anioIncorporacion,p_nroDespacho);
        this.#departamento = p_departamento;
    }

    // Método setter para establecer el departamento del profesor
    set departamento(nuevoDepartamento) {
        this.#departamento = nuevoDepartamento;
    }
    
    // Método para obtener información del profesor
    getInformacionProfesor(){
        return this.getInformacionEmpleado() + ' Departamento:'+this.#departamento ;
    }    
}

class PersonalServicio extends Empleado {
    #seccionAsignada;// Sección asignada al personal de servicio

    // Constructor de la clase PersonalServicio
    constructor(p_nombre, p_apellido,p_dni,p_estadoCivil,p_anioIncorporacion,p_nroDespacho,p_seccionAsignada) {
        super(p_nombre, p_apellido,p_dni,p_estadoCivil,p_anioIncorporacion,p_nroDespacho);
        this.#seccionAsignada = p_seccionAsignada;
    }

    // Método setter para establecer la sección asignada del personal de servicio
    set seccionAsignada(nuevoSeccionAsignada) {
        this.#seccionAsignada = nuevoSeccionAsignada;
    }

    // Método para obtener información del personal de servicio
    getInformacionPersonalServicio(){
        return this.getInformacionEmpleado() + ' Secc. Asignada:'+this.#seccionAsignada ;
    }    
}

class CentroEducativo{
    #nombre;
    #profesores; // Lista de profesores en el centro educativo
    #estudiantes; // Lista de estudiantes en el centro educativo
    #personalServicio; // Lista de personal de servicio en el centro educativo
    
    // Constructor de la clase CentroEducativo
    constructor(p_nombre) {
        this.#nombre = p_nombre;
        this.#profesores=[];
        this.#estudiantes=[];
        this.#personalServicio=[];
    }
    //Agregar Profesor
    altaProfesor(p_profesor){
        this.#profesores.push(p_profesor);      
        //Luego de Agregar Ordeno la Lista
        this.#profesores.sort((e1,e2)=>
         {
            // Comparar los nombres ignorando mayúsculas y minúsculas
            const nombreA = e1.nombreCompleto.toUpperCase();
            const nombreB = e2.nombreCompleto.toUpperCase();
            
            if (nombreA < nombreB) {
                return -1; 
            }
            if (nombreA > nombreB) {
                return 1; 
            }
            return 0; 
        });             
    }
    //Eliminar el profesor del DNI recibido
    bajaProfesor(p_DNI){
        // Utilizamos el método filter para crear un nuevo array sin el objeto que cumple la condición
        this.#profesores = this.#profesores.filter(profesor => profesor.dni !== p_DNI);
    }
    //Lista Profesores - separador es el string utilizado para separar la cadena
    listarProfesores(separador=' ') {
        var texto = '';
        this.#profesores.forEach(profesor => {
            texto += profesor.getInformacionProfesor()+separador;
        });
        return texto;
    }
    //Agregar Estudiante
    altaEstudiante(p_estudiante){
        this.#estudiantes.push(p_estudiante);
        //Luego de Agregar Ordeno la Lista
        this.#estudiantes.sort((e1,e2)=>
         {
            // Comparar los nombres ignorando mayúsculas y minúsculas
            const nombreA = e1.nombreCompleto.toUpperCase();
            const nombreB = e2.nombreCompleto.toUpperCase();
            
            if (nombreA < nombreB) {
                return -1; 
            }
            if (nombreA > nombreB) {
                return 1; 
            }
            return 0; 
        });
    }
     //Eliminar el Estudiante del DNI recibido
    bajaEstudiante(p_DNI){
        // Utilizamos el método filter para crear un nuevo array sin el objeto que cumple la condición
        this.#estudiantes = this.#estudiantes.filter(estudiante => estudiante.dni !== p_DNI);
    }
    //Lista Estudiantes - separador es el string utilizado para separar la cadena
    listarEstudiantes(separador=' ') {
        var texto = '';
        this.#estudiantes.forEach(estudiante => {
            texto += estudiante.getInformacionEstudiante()+separador;
        });
        return texto;
    }
    //Agregar Personal de Servicio
    altaPersonalServicio(p_personalServicio){
        this.#personalServicio.push(p_personalServicio);
        //Luego de Agregar Ordeno la Lista
        this.#personalServicio.sort((e1,e2)=>
         {
            // Comparar los nombres ignorando mayúsculas y minúsculas
            const nombreA = e1.nombreCompleto.toUpperCase();
            const nombreB = e2.nombreCompleto.toUpperCase();
            
            if (nombreA < nombreB) {
                return -1; 
            }
            if (nombreA > nombreB) {
                return 1; 
            }
            return 0; 
        });        
    }
    //Eliminar el Personal de Servicio del DNI recibido
    bajaPersonalServicio(p_DNI){
        // Utilizamos el método filter para crear un nuevo array sin el objeto que cumple la condición
        this.#personalServicio = this.#personalServicio.filter(personalServicio => personalServicio.dni !== p_DNI);
    }
    //Lista Personal de Servicio - separador es el string utilizado para separar la cadena
    listarPersonalServicio(separador=' ') {
        var texto = '';
        this.#personalServicio.forEach(pers => {
            texto += pers.getInformacionPersonalServicio()+separador;
        });
        return texto;
    }
}
