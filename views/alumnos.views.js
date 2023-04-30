
import { createPage } from "../pages/utils.js";


function crearListaAlumnos(alumnos) {
    let html = "<h2>Alumnos</h2>";
    html += "<ul>";
  
    for (let i = 0; i < alumnos.length; i++) {
      html += `<li>${alumnos[i].nombre}, ${alumnos[i].apellido}<a class="btn btn-outline-dark" href="/alumnos/${alumnos[i].legajo}"> Ver</a> <a class="btn btn-outline-dark" href="/alumnos/${alumnos[i].legajo}/modificar">Modificar</a> <a class="btn btn-outline-dark" href="/alumnos/${alumnos[i].legajo}/eliminar">Eliminar</a></li>`;
    }
    html += "</ul>";
  
    return createPage("Alumnos", html);
  }
  
  function crearPaginaAlumno(alumno){
      let html = `<h2>${alumno.nombre}, ${alumno.apellido}</h2>`;
        html += `<p>Año de inscripción: ${alumno.anio}</p>`;
        return createPage(alumno.apellido, html);
  }

  function crearFormAlumno(){
    let html = "<h2>Agregar Alumno</h2>";
  html += '<form action="/alumnos/nuevo" method= "POST">';
  html += '<input type="text" name="nombre" placeholder="Nombre">';
  html += '<input type="text" name="apellido" placeholder="Apellido">';
  html += '<input type="number" name="anio" placeholder="Fecha de ingreso">';
  html += '<button class="btn btn-outline-dark" type="submit">Crear</button>';
  html += "</form>";

  return createPage("Agregar alumno", html);
  }

  function crearModificarAlumno(alumno){
    let html = "<h2>Modificar Alumno</h2>";
    html += `
    <form action="/alumnos/${alumno.legajo}/modificar" method= "POST">
    <input type="text" name="nombre" placeholder="Nombre" value="${alumno.nombre}">
    <input type="text" name="apellido" placeholder="Apellido" value="${alumno.apellido}">
    <input type="number" name="anio" placeholder="Fecha de ingreso" value="${alumno.anio}">
    <button class="btn btn-outline-dark" type="submit">Modificar</button>
    </form>
    `
  
    return createPage("Modificar alumno", html);
  }

  function crearPaginaBorrado(alumno){
    let html = `<h2>${alumno.nombre}, ${alumno.apellido}</h2>`;
    html += `<p>Año de inscripción: ${alumno.anio}</p>`;
    html += `<form action="/alumnos/${alumno.legajo}/eliminar" method="POST">
    <button class="btn btn-danger" type="submit">Eliminar</button>
    </form>`

    return createPage(alumno.apellido, html);
  }
  
  export{
    crearListaAlumnos,
    crearPaginaAlumno,
    createPage,
    crearFormAlumno,
    crearModificarAlumno,
    crearPaginaBorrado
  }