const express = require('express');
const server = express();
let counter = 0;

server.use(express.json());

// Middleware Global que contabiliza as requisições
server.use((req, res, next) => {
  console.log(`Quantidade de requisições realizadas: ${counter += 1}`);

  return next();
})

// Middleware local que verifica a existência do ID no array de Projetos
function checkProjectId(req, res, next){
  const { id } = req.params;

  const project = projects.find(project => project.id == id);

  if(!project){
    return res.status(400).json({ error: 'Product ID Not Found'});
  }

  req.id = id

  return next();
}

const projects = [{
  id: 0,
  title: "Novo Projeto",
  tasks: ["Codar"]
}];

// Cadastrar um novo projeto com id e title
server.post('/projects', (req, res) => {
  const {id, title, tasks} = req.body;
  const newProject = {
    id,
    title,
    tasks
  };

  projects.push(newProject);
  return res.json(projects);
})

// Armazena uma nova tarefa no array de tarefas de um projeto através do ID
server.post('/projects/:id/tasks', checkProjectId,  (req, res) => {
  const { title } = req.body;

  const project = projects.find(project => project.id == req.id);
  const index = projects.indexOf(project);
  project.tasks.push(title);

  return res.json(projects[index]);
})

// Listagem de todos os projetos
server.get('/projects', (req, res) => {
  return res.json(projects);
})

// Alteração do título do projeto através do ID
server.put('/projects/:id',  checkProjectId, (req, res) => {
  const { title } = req.body;

  const project = projects.find(project => project.id == req.id);
  const index = projects.indexOf(project);
  project.title = title;

  return res.json(projects[index]);
})

// Exclusão de um projeto através do seu ID
server.delete('/projects/:id', checkProjectId,  (req, res) => {
  const project = projects.find(project => project.id == req.id);
  const index = projects.indexOf(project);
  projects.splice(index, 1);

  // return res.json(projects) Não mostrar por boas práticas.
  return res.status(200).json({ message: 'Project Deleted'});
});

server.listen(3333);

