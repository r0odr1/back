const express = require("express");
const db = require("@makeitrealcamp/db-mock");

const app = express();
const port = 3000;

app.use(express.json()); //Recibimos el body

//Rutes

app.get("/healtcheck", (req, res) => {
  res.status(200).send("OK");
});

//Create = POST
app.post("/users", (req, res) => {
  try {
    const { body } = req;
    const response = db.insert({ ...body });

    res
      .status(201)
      .json({ message: "User created succesfully", data: response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Read = GET
app.get("/users", (req, res) => {
  try {
    const response = db.findAll();

    res
      .status(200)
      .json({ message: "User created succesfully", data: response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Read = GET:id
app.get("/users/:id", (req, res) => {
  try {
    const { id } = req.params;
    const response = db.findById(id);

    res.status(200).json({ message: "User found succesfully", data: response });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.put("/users/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const response = db.update({ id, ...body });

    res.status(200).json({ message: 'User update succesfully', data: response })
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete("/users/:id", (req, res) => {
  try {
    const { id } = req.params
    const response = db.remove(id)

    res.status(201).json({ message: 'User deleted succesfully', data: response})
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

app.listen(port, () => {
  console.log(`Successfully running at ${port}`);
});
