import express from "express";
import alumnoRoute from './routes/alumnos.routes.js'


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("public"));

app.use(alumnoRoute)

app.listen(2023, function () {
  console.log("Servidor funcionando :)");
});
