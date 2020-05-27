const mysql = require("mysql")
const inquirer = require("inquirer");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
  });