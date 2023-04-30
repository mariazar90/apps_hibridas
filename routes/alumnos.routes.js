import express from 'express'
import * as controller from '../controllers/alumnos.controllers.js'

const route = express.Router()

route.get('/alumnos', controller.obtenerAlumnos)
route.get("/alumnos/nuevo", controller.crearFormAlumno)
route.post("/alumnos/nuevo", controller.crearAlumno)

route.get("/alumnos/:legajoAlumno/modificar", controller.modificarFormAlumno)
route.post("/alumnos/:legajoAlumno/modificar", controller.modificarAlumno)

route.get("/alumnos/:legajoAlumno/eliminar", controller.borrarAlumnoForm)
route.post("/alumnos/:legajoAlumno/eliminar", controller.borrarAlumno)

route.get("/alumnos/:legajoAlumno", controller.obtenerAlumnosPorLegajo)

export default route