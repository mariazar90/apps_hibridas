import * as service from '../services/alumnos.services.js'
import * as view from '../views/alumnos.views.js'


function obtenerAlumnos(req, res) {
    service.obtenerAlumnos({deleted: true}).then(function (alumnos) {
      res.send(view.crearListaAlumnos(alumnos));
    });
  }

function obtenerAlumnosPorLegajo(req, res) {
    let legajoData = req.params.legajoAlumno;
  
    service.obtenerAlumnosPorLegajo(legajoData)
    .then(function (alumno) {
  
      if (alumno) {
        res.send(view.crearPaginaAlumno(alumno))
      } else {
        res.send("No se encontró el alumno");
      }
    });
  }

  function crearFormAlumno(req,res){
    res.send(view.crearFormAlumno())
  }

  function crearAlumno(req,res){
    const alumno = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      anio: req.body.anio,
    }
    service.crearAlumno(alumno)
    .then(function(nuevoAlumno){
      res.send(view.createPage('Alumno agregado', `<p>Alumno ${nuevoAlumno.nombre} ${nuevoAlumno.apellido} agregado en el año: ${nuevoAlumno.anio}</p>`))
    })
    .catch(function(error){
      res.send(view.createPage('Error', `<p>No se ha podido cargar el alumno</p>`))
    })
  }

  function modificarFormAlumno(req,res){
    const legajo = req.params.legajoAlumno

    service.obtenerAlumnosPorLegajo(legajo)
    .then(function(alumno){
      if(alumno){
        res.send(view.crearModificarAlumno(alumno))
      }else{
        res.send(view.createPage('no se encontró el alumno'))
      }
    })
  }

  function modificarAlumno(req, res){
    const legajo= req.params.legajoAlumno
    const alumno = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      anio: req.body.anio
    }

    service.modificarAlumno(legajo, alumno)
    .then(function(alumno){
      if(alumno){
        res.send(view.createPage('Alumno Modificado', `<h2>${alumno.legajo} Modificado</h2>`))
      }
      else {
        res.send(view.createPage('No se encontrò'))
      }
    })
  }

  function borrarAlumnoForm(req,res){
    const legajo = req.params.legajoAlumno

    service.obtenerAlumnosPorLegajo(legajo)
    .then(function(alumno){
      if (alumno){
        res.send(view.crearPaginaBorrado(alumno))
      }
      else{
        res.send(view.createPage('No existe'))
      }
    })
  }

  function borrarAlumno(req,res){
    const legajo = req.params.legajoAlumno

    service.borrarAlumno(legajo)
    .then(function(alumno){
      if(alumno){
        res.send(view.createPage('Alumno Eliminado', `<h2>${alumno.legajo} Alumno Eliminado</h2>`))
      }
      else {
        res.send(view.createPage('No se encontrò'))
      }
    })
  }

  export{
    obtenerAlumnos,
    obtenerAlumnosPorLegajo,
    crearFormAlumno,
    crearAlumno,
    modificarFormAlumno,
    modificarAlumno,
    borrarAlumnoForm,
    borrarAlumno
  }