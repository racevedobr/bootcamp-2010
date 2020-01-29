const express = require('express');

const server = express();

server.use(express.json());

// verifica se o projeto existe
function checkProjectExists(req, res, next) {
    const { id } = req.params;

    const project = projects.find(p => p.id == id);

    if (!project) {
        return res.status(400).json({ message: 'Project does not exists'});
    }

    return next();
 };

 //Conta as requisições
function contaRequisicoesFeitas(eq, res, next) {

    console.count("Número de requisições");

    return next();
};

server.use(contaRequisicoesFeitas);

const projects = [];

// Consulta todos os projetos
server.get('/projects', (req, res) => {

    return res.send(projects);

});

//Consulta  pelo id do projeto
server.get('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;
    return res.json(projects[id]);

});

// Cria o projeto
server.post('/projects',  (req, res) => {
const { id, title } = req.body;

const project = {
    id,
    title,
    tasks: []
};

projects.push(project);

res.json(projects);

});

//Cria  a task  no projeto
server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(p => p.id == id);

    project.tasks.push(title)

    res.json(project);

    });

// Edita o projeto
server.put('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects[id]
    console.log(project)
    project.title = title;
    console.log(project)

    res.json(project);


});

//Consulta  pelo id do projeto
server.delete('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;

    const indexProject = projects.findIndex(p => p.id == id);

    projects.splice(indexProject.id, 1);


    return res.send();

});


server.listen(3210);