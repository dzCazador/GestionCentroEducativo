class Persona {
    #nombre;
    #apellido;
    #dni;
    #estadoCivil;
    constructor(p_nombre, p_apellido,p_dni,p_estadoCivil) {
        this.#nombre = p_nombre;
        this.#apellido = p_apellido;
        this.#dni = p_dni;
        this.#estadoCivil = p_estadoCivil;

    }
    get nombreCompleto(){
        return this.#nombre + ' ' + this.#apellido;
    }
    get dni(){
        return this.#dni;
    }
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

    set nroDespacho(nuevoNroDespacho) {
        this.#nroDespacho = nuevoNroDespacho;
    }
    getInformacionEmpleado(){
        return this.getInformacionPersona() + ' Año de Incorporacion:'+this.#anioIncorporacion +' Nro Despacho:'+this.#nroDespacho;
    }
}

class Estudiante extends Persona {
    #cursoMatriculado;
    constructor(p_nombre, p_apellido,p_dni,p_estadoCivil,p_cursoMatriculado) {
        super(p_nombre, p_apellido,p_dni,p_estadoCivil);
        this.#cursoMatriculado = p_cursoMatriculado;
    }

    set cursoMatriculado(nuevoCursoMatriculado) {
        this.#cursoMatriculado = nuevoCursoMatriculado;
    }
    getInformacionEstudiante(){
        return this.getInformacionPersona() + ' CursoMatriculado:'+this.#cursoMatriculado ;
    }    

}

class Profesor extends Empleado {
    #departamento;
    constructor(p_nombre, p_apellido,p_dni,p_estadoCivil,p_anioIncorporacion,p_nroDespacho,p_departamento) {
        super(p_nombre, p_apellido,p_dni,p_estadoCivil,p_anioIncorporacion,p_nroDespacho);
        this.#departamento = p_departamento;
    }
    set departamento(nuevoDepartamento) {
        this.#departamento = nuevoDepartamento;
    }
    getInformacionProfesor(){
        return this.getInformacionEmpleado() + ' Departamento:'+this.#departamento ;
    }    
}

class PersonalServicio extends Empleado {
    #seccionAsignada;
    constructor(p_nombre, p_apellido,p_dni,p_estadoCivil,p_anioIncorporacion,p_nroDespacho,p_seccionAsignada) {
        super(p_nombre, p_apellido,p_dni,p_estadoCivil,p_anioIncorporacion,p_nroDespacho);
        this.#seccionAsignada = p_seccionAsignada;
    }
    set seccionAsignada(nuevoSeccionAsignada) {
        this.#seccionAsignada = nuevoSeccionAsignada;
    }

    getInformacionPersonalServicio(){
        return this.getInformacionEmpleado() + ' Secc. Asignada:'+this.#seccionAsignada ;
    }    
}

class CentroEducativo{
    #profesores;
    #estudiantes;
    #personalServicio;
    constructor() {
        this.#profesores=[];
        this.#estudiantes=[];
        this.#personalServicio=[];
    }
    altaProfesor(p_profesor){
        this.#profesores.push(p_profesor);
        this.#profesores.sort()
    }
    bajaProfesor(p_DNI){
        // Utilizamos el método filter para crear un nuevo array sin el objeto que cumple la condición
        this.#profesores = this.#profesores.filter(profesor => profesor.dni !== p_DNI);
    }
    altaEstudiante(p_estudiante){
        this.#profesores.push(p_estudiante);
    }
    bajaEstudiante(p_DNI){
        // Utilizamos el método filter para crear un nuevo array sin el objeto que cumple la condición
        this.#estudiantes = this.#estudiantes.filter(estudiante => estudiante.dni !== p_DNI);
    }
    altaPersonalServicio(p_personalServicio){
        this.#profesores.push(p_personalServicio);
    }
    bajaPersonalServicio(p_DNI){
        // Utilizamos el método filter para crear un nuevo array sin el objeto que cumple la condición
        this.#personalServicio = this.#personalServicio.filter(personalServicio => personalServicio.dni !== p_DNI);
    }


}
