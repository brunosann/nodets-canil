import express from "express";
import mustache from "mustache-express";
import dotenv from "dotenv";
import path from "path";
import mainRoutes from "./routes";

dotenv.config();
const server = express();

// config das views
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

// config arquivos publicos
server.use(express.static(path.join(__dirname, "../public")));

// rotas
server.use(mainRoutes);

server.use((req, res) => {
  res.send("404");
});

server.listen(process.env.PORT, () => {
  console.log(`server is running http://localhost:${process.env.PORT}`);
});
