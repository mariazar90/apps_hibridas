function createPage(title, content) {
    let html;
    
    html = '<!DOCTYPE html><html><head><meta charset="UTF-8">';
    html += '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">'
    html += '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>'
    html += '<link rel="stylesheet" href="/css/styles.css">';
    html += "<title>" + title + "</title></head><body>";
    html += '<a href="/alumnos">Alumnos</a> | <a href="/alumnos/nuevo">Cargar Alumno</a>'
    html += "<h1>Lista de alumnos</h1>";
    html += content;
    html += "</body></html>";
    return html;
  }

  function crearListaAlumnos(alumnos) {
    let content = "<ul>";
    for (let i = 0; i < alumnos.length; i++) {
      content += "<li>" + alumnos[i].name + "</li>";
    }
    content += "</ul>"
    return content
  }
  
  export{
    createPage,
    crearListaAlumnos 
  }