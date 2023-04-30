import { readFile, writeFile } from "node:fs/promises";

async function obtenerAlumnos(filter={}) {
  return readFile("./data/alumnos.json")
    .then(function (data) {
      return JSON.parse(data);
    })
    .then(function(alumnos){
      if(filter.deleted){
        const alumnosFilter = []
        for (let i = 0; i < alumnos.length; i++){
          if(!alumnos[i].deleted){
            alumnosFilter.push(alumnos[i])
          }
        }
        return alumnosFilter
      } else {
        return alumnos
      }
    })
    .catch(function (err) {
      return [];
    });
}

async function guardarAlumnos(alumnos){
  return writeFile('./data/alumnos.json', JSON.stringify(alumnos))
}

async function obtenerAlumnosPorLegajo(legajoData) {
  return obtenerAlumnos().then(function (alumnos) {
    for (let i = 0; i < alumnos.length; i++) {
      if (alumnos[i].legajo == legajoData) {
        return alumnos[i];
      }
    }
    return null;
  });
}

async function crearAlumno(alumno){
  const alumnos = await obtenerAlumnos()
  const nuevoAlumno = {
    legajo: alumnos.length + 1,
    nombre: alumno.nombre,
    apellido: alumno.apellido,
    anio: alumno.anio
  }
    alumnos.push(nuevoAlumno)

    await guardarAlumnos(alumnos)

    return alumno
}

async function modificarAlumno(legajoAlumno, alumno){
  const alumnos = await obtenerAlumnos()
  let alumnoModificado = null

  for (let i = 0; i < alumnos.length; i++){
    if(alumnos[i].legajo == legajoAlumno){
      alumnos[i] = {
        ...alumno,
        legajo:alumnos[i].legajo
      }

      alumnoModificado = alumnos[i]
      break
    }
  }
  if(alumnoModificado){
    await guardarAlumnos(alumnos)
  }

  return alumnoModificado
}

async function borrarAlumno(legajoAlumno){
  const alumnos = await obtenerAlumnos()
  let alumnoBorrado = null

  for (let i = 0; i < alumnos.length; i++){
    if(alumnos[i].legajo == legajoAlumno){
      alumnos[i].deleted = true
      alumnoBorrado = alumnos[i]
      break
    }
  }
  if(alumnoBorrado){
    await guardarAlumnos(alumnos)
  }

  return alumnoBorrado
}

export { obtenerAlumnos, obtenerAlumnosPorLegajo, crearAlumno, modificarAlumno, guardarAlumnos, borrarAlumno }
