const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.status(200).json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs} = request.body;

  const repo = {
    id: uuid(),
    likes: 0,
    techs,
    title,
    url,
  }

  repositories.push(repo)

  return response.status(200).json(repo)
});

app.put("/repositories/:id", (request, response) => {
  const { id }= request.params;
  const { title, url, techs } = request.body;
  let { likes } = request.body;

  const repositoriesIndex = repositories.findIndex(repo => repo.id === id);

  if(likes){
    likes = repositories[repositoriesIndex].likes;
  }

  if(repositoriesIndex === -1){
    return response.status(400).json({error: "Bad Request"})
  }

  const repo = {
    id,
    title,
    url,
    techs,
    likes,
  }

  return response.status(200).json(repo)
});

app.delete("/repositories/:id", (request, response) => {
  const { id }= request.params;

  const repositoriesIndex = repositories.findIndex(repo => repo.id === id);

  if(repositoriesIndex === -1){
    return response.status(400).json({error: "Bad Request"})
  }

  repositories.splice(repositoriesIndex, 1)

  return response.status(204).send()

});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repositoriesIndex = repositories.findIndex(repo => repo.id === id);

  if(repositoriesIndex === -1){
    return response.status(400).json({error: "Repository does not exists"})
  }

  repositories[repositoriesIndex].likes += 1

  return response.status(200).json(repositories[repositoriesIndex])
});

module.exports = app;
