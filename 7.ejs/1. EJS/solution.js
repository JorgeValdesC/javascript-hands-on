import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date(); // Date es un objeto de tipo fecha
  //Test code
  // weekend:
  // new Date("June 24, 2023 11:13:00");
  // weekday:
  // new Date("June 20, 2023 11:13:00");
  const day = today.getDay(); // se declara que la variable de nombre day, es una constante, así que una vez que se aplique el get no puede cambiar
  // getDay() es una función del objeto Day que te devuelve un número del 0-6 dependiendo del día de la semana. 

  // console.log(day);
  let type = "a weekday"; // let se usa para iniciar la variable, type es el nombre de la variable
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  res.render("solution.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
