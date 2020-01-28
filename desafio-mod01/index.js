const express = require('express');

const server = express();

server.use(express.json());

const projects = []; 
const tasks = [];


server.get('/projects', (req, res) => {
    
    return res.send(projects);

});

server.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    return res.json(projects[id]);

});

server.post('/projects', (req, res) => {
const { id, title } = req.body;

const project = {
    id,
    title,
    tasks: []
};

projects.push(project);

res.json(projects);

});

server.post('/projects/:id/tasks', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    
    const project = projects.find(p => p.id == id);
    
    project.tasks.push(title)

    res.json(project);
    
    });

server.put('/projects/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects[id]
    console.log(project) 
    project.title = title;
    console.log(project)

    res.json(project);


});


server.listen(3210);