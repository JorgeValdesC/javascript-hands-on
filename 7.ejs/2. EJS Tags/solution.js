import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = {
    title: "jorge Prueba",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry", 'coco', 'piña mexicana'],
    htmlContent: "<em>This is some text</em>",
  };
  res.render("solution.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
